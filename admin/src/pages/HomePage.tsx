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
import { RequestOptions, DeploymentData } from '../types';
import { DeploymentItem } from '../components/DeploymentItem';
import { EmptyPageComponent } from '../components/EmptyPageComponent';

const HomePage = () => {
  const [data, setData] = useState<DeploymentData[] | null>(null);
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { formatMessage } = useIntl();

  const { get, post } = useFetchClient();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    get(`/${PLUGIN_ID}/`)
      .then((res) => {
        setData(res.data);
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
            <Loader big>Loading</Loader>
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

            {data && data.length ? (
              <Grid.Root gap={4}>
                {data.map((item) => (
                  <DeploymentItem key={item.id} {...item}></DeploymentItem>
                ))}
              </Grid.Root>
            ) : (
              <EmptyPageComponent />
            )}
          </>
        )}
      </Flex>
    </Main>
  );
};

export { HomePage };
