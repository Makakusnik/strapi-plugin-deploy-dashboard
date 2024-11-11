import type { Core } from '@strapi/strapi';
import Instance from '../content-types';

type Instance = {
  id: string;
  displayName: string;
  hook_url: string;
};

const deploymentService = ({ strapi }: { strapi: Core.Strapi }) => ({
  getDeploymentData(pluginId) {
    const deployments = strapi.plugins[pluginId].config('deployments') as Array<Instance>;

    return deployments || [];
  },
});

export default deploymentService;
