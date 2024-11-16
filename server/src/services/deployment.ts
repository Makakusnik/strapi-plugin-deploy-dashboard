import type { Core } from '@strapi/strapi';
import Instance from '../content-types';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

type Instance = {
  id: string;
  displayName: string;
  hook_url: string;
};

const deploymentService = ({ strapi }: { strapi: Core.Strapi }) => ({
  getDeploymentData() {
    const deployments = strapi.plugins[PLUGIN_ID].config('deployments') as Array<Instance>;

    return deployments || [];
  },
});

export default deploymentService;
