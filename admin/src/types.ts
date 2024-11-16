export type DeploymentData = {
  id: string;
  name: string;
  instances: Instance[];
};

export type Instance = {
  id: string;
  name: string;
  hookUrl: string;
  requestOptions: RequestOptions;
};

export type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};
