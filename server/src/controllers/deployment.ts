import type { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

const deploymentController = ({ strapi }: { strapi: Core.Strapi }) => ({
  async index(ctx) {
    const data = await strapi.plugin(PLUGIN_ID).service('deploymentService').getDeploymentData();

    ctx.send(data);
  },
});

export default deploymentController;
