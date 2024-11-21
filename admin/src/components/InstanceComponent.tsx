import { Button, Flex, IconButton, Typography, Dialog } from '@strapi/design-system';
import { File, FileError, Loader, Upload, WarningCircle } from '@strapi/icons';
import { RequestOptions } from '../types';
import { useState } from 'react';
import { CONTENT_TYPE_APPLICATION_JSON, CONTENT_TYPE_TEXT_HTML } from '../constants/ResponseTypes';

export type InstanceProps = {
  id: string;
  hookUrl: string;
  name: string;
  requestOptions: RequestOptions;
};

export const InstanceComponent = ({ id, name, hookUrl, requestOptions }: InstanceProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [ready, setReady] = useState<boolean>(true);

  const fetchHandler = async (hookUrl: string, customFetchOptions: RequestOptions) => {
    setReady(false);
    setError(null);
    setResponse(null);

    fetch(hookUrl, {
      method: customFetchOptions?.method ?? 'POST',
      headers: customFetchOptions?.headers,
      body: customFetchOptions?.body ? JSON.stringify(customFetchOptions.body) : undefined,
    })
      .then(async (res) => {
        switch (res?.headers?.get('Content-Type')?.split(';')[0]) {
          case CONTENT_TYPE_APPLICATION_JSON: {
            const json = await res.json();

            return JSON.stringify(json);
          }
          case CONTENT_TYPE_TEXT_HTML: {
            const text = await res.text();
            const statusCode = res.status;

            return JSON.stringify({ text, statusCode });
          }
          default: {
            return JSON.stringify({
              message: 'Unknown response error',
              response: JSON.stringify(res),
            });
          }
        }
      })
      .then((res) => {
        setReady(true);
        setResponse(res);
      })
      .catch((error) => {
        setReady(true);
        setError(JSON.stringify({ message: 'Unknown code error.', error: error.message }));
      });
  };

  return (
    <Flex gap={4}>
      <Typography width="140px">{name}</Typography>
      <Button
        variant="default"
        startIcon={ready ? <Upload /> : <Loader />}
        onClick={() =>
          fetchHandler(hookUrl, {
            body: requestOptions?.body,
            headers: requestOptions?.headers,
            method: requestOptions?.method,
          })
        }
      >
        Deploy
      </Button>

      <Dialog.Root>
        <Dialog.Trigger>
          <IconButton
            variant={error ? 'danger-light' : 'success-light'}
            label={error ? 'Error logs' : 'Response'}
            disabled={response == null && error == null}
            withTooltip={false}
          >
            {error ? <FileError /> : <File />}
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>{response ? 'Response' : error ? 'Error' : 'Unknown'}</Dialog.Header>
          <Dialog.Body style={{ display: 'block' }} icon={<WarningCircle fill="danger600" />}>
            <code style={{ fontSize: '1.2rem', width: 'fit-content' }}>{response || error}</code>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Cancel>
              <Button fullWidth variant="tertiary">
                Close
              </Button>
            </Dialog.Cancel>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};
