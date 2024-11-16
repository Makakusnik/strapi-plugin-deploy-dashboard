import { Box, Button, Flex, Typography } from '@strapi/design-system';
import { Instance } from '../types';
import { InstanceComponent } from './InstanceComponent';

export type DeploymentItemProps = {
  id: string;
  name: string;
  instances: Instance[];
};

export const DeploymentItem = ({ id, name, instances }: DeploymentItemProps) => {
  return (
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
            {name}
          </Typography>
          <Flex gap={4} direction="column">
            {instances.map((item) => (
              <InstanceComponent key={item.id} {...item} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
