import { Flex, Link, Typography } from '@strapi/design-system';

export const EmptyPageComponent = () => {
  return (
    <Flex
      direction="column"
      width="100%"
      minHeight="450px"
      background="neutral0"
      justifyContent="start"
      paddingTop={8}
    >
      <Typography marginBottom={6} variant="beta">
        Add deployment configuration
      </Typography>
      <Flex direction="column" alignItems="start">
        <Typography>
          Your configuration file is in strapi folder under <code>config/plugins.ts</code>
        </Typography>
        <Typography>
          For more information please visit this{' '}
          <Link href="https://github.com/Makakusnik/strapi-plugin-deploy-dashboard" target="_blank">
            repository page
          </Link>
          .
        </Typography>
      </Flex>
    </Flex>
  );
};
