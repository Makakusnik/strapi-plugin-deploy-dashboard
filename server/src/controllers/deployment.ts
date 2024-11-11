import type { Core } from '@strapi/strapi';

const deploymentController = ({ strapi }: { strapi: Core.Strapi }) => ({
  async index(ctx) {
    const data = await strapi
      .plugin('deploy-dashboard')
      .service('deploymentService')
      .getDeploymentData('deploy-dashboard');

    ctx.send(data);
  },
});

export default deploymentController;
