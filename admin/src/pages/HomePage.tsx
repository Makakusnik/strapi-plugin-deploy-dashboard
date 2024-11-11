import {
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Loader,
  Main,
  Typography,
} from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { ArrowLeft, Upload } from '@strapi/icons';
import { PLUGIN_ID } from '../pluginId';
import { useFetchClient } from '@strapi/admin/strapi-admin';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const HomePage = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { formatMessage } = useIntl();

  const { get } = useFetchClient();
  const navigate = useNavigate();

  const handler = () => {
  };

  useLayoutEffect(() => {
    get(`/${PLUGIN_ID}/`)
      .then((res) => {
        setReady(true);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  return (
    <Main>
      <Flex direction="column" padding={[5, 10]} justifyContent="start" alignItems="start" gap={6}>
        <Flex>
          <Link as={NavLink} startIcon={<ArrowLeft />} onClick={() => navigate(-1)}>
            Back
          </Link>
        </Flex>
        <Flex alignItems="start" direction="column">
          <Typography variant="alpha">Deploy Dashboard</Typography>
          <Typography textColor="neutral400" variant="epsilon">
            Dashboard for deploying and monitoring status of deployments.
          </Typography>
        </Flex>

        {!ready ? (
          <Flex width="100%" height="100%" minHeight="400px" justifyContent="center">
            <Loader big>{formatMessage({ id: 'cloudflare-pages.home.busy' })}</Loader>
          </Flex>
        ) : (
          <>
            {error && (
              <Alert
                title="Error"
                closeLabel="Close"
                onClose={() => setError(null)}
                variant="danger"
              >
                {error}
              </Alert>
            )}

            <Grid.Root gap={4}>
              <Box background="neutral0" width="fit-content" margin={50} padding={[6, 6]}>
                <Flex gap={8}>
                  <Flex
                    alignItems="start"
                    direction="column"
                    padding={4}
                    borderRadius={'3px'}
                    borderColor={'neutral400'}
                    width={'fit-content'}
                  >
                    <Typography variant="delta" textColor="neutral600" padding={[0, 0, 4, 0]}>
                      Cloudflare pages
                    </Typography>
                    <Flex gap={4} direction="column">
                      <Flex gap={4}>
                        <Typography width="140px">Production</Typography>
                        <Button variant="default" startIcon={<Upload />} onClick={handler}>
                          Deploy
                        </Button>
                      </Flex>
                      <Flex gap={4}>
                        <Typography width="140px">Preview</Typography>
                        <Button variant="default" startIcon={<Upload />} onClick={handler}>
                          Deploy
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Grid.Root>
          </>
        )}
      </Flex>
    </Main>
  );
};

export { HomePage };
