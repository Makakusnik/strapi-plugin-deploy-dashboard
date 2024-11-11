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
          <Box background="neutral0" margin={50} width="fit-content" padding={[6, 6]}>
            <Flex gap={8}>
              <Flex
                alignItems="start"
                direction="column"
                padding={[4]}
                style={{
                  background:
                    'repeating-linear-gradient(7deg, #32324d, #32324d 18px, transparent 18px, transparent 30px, #32324d 30px), repeating-linear-gradient(97deg, #32324d, #32324d 18px, transparent 18px, transparent 30px, #32324d 30px), repeating-linear-gradient(187deg, #32324d, #32324d 18px, transparent 18px, transparent 30px, #32324d 30px), repeating-linear-gradient(277deg, #32324d, #32324d 18px, transparent 18px, transparent 30px, #32324d 30px)',
                  backgroundSize: '2px 100%, 100% 2px, 2px 100% , 100% 2px',
                  backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
                  backgroundRepeat: 'no-repeat',
                }}
                borderRadius={'3px'}
                height={'150px'}
                width={'300px'}
              >
                <Flex alignItems="center" width="100%" height="100%" justifyContent="center">
                  <Button variant="ghost" startIcon={<Plus></Plus>}>
                    Add new configruation
                  </Button>
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
