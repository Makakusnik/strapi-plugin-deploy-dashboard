import deploymentRoutes from './deployment';

export default {
  admin: {
    type: 'admin',
    routes: [...deploymentRoutes],
  },
};
