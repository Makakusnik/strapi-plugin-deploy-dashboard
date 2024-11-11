import { Box, Button, Flex, Grid, Main, Typography } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { Plus, Upload } from '@strapi/icons';
import { InformationSquare } from '@strapi/icons/symbols';
import { PLUGIN_ID } from '../pluginId';
import { useFetchClient } from '@strapi/admin/strapi-admin';

const HomePage = () => {
  const { get } = useFetchClient();
  const handler = () => {
    get(`/${PLUGIN_ID}/`).then((res) => {
      console.log(res);
    });
  };

  return (
    <Main>
      <Box padding={{ initial: [10, 10] }}>
        <div>{'<-'} back</div>
        <Flex alignItems="start" direction="column">
          <Typography variant="alpha">Deploy Dashboard</Typography>
          <Typography textColor="neutral400" variant="epsilon">
            Dashboard for deploying and monitoring status of deployments.
          </Typography>
        </Flex>
        <div style={{ height: '40px' }}></div>
        {/* spacer component*/}
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
                    <Button variant="tertiary" startIcon={<InformationSquare />} onClick={handler}>
                      Logs
                    </Button>
                  </Flex>
                  <Flex gap={4}>
                    <Typography width="140px">Preview</Typography>
                    <Button variant="default" startIcon={<Upload />} onClick={handler}>
                      Deploy
                    </Button>
                    <Button variant="tertiary" startIcon={<InformationSquare />} onClick={handler}>
                      Logs
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Grid.Root>
      </Box>
    </Main>
  );
};

export { HomePage };
