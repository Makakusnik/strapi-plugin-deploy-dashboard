# strapi-plugin-deploy-dashboard

A Strapi plugin that allows you to manage deployment webhooks directly from a dashboard. Configure your deployment endpoints, trigger builds, and manage multiple environments with ease.

---

## Features

- Define deployment configurations in your project settings.
- Support for multiple deployment environments and instances.
- Advanced request options for fine-tuned webhook control.
- User-friendly dashboard for triggering deployments.

---

## Installation

1. Install the plugin:
   ```bash
   npm install strapi-plugin-deploy-dashboard
   ```

2. Enable the plugin in your Strapi project by adding it to your `config/plugins.js` file:
   ```javascript
   module.exports = {
     'strapi-plugin-deploy-dashboard': {
       enabled: true,
     },
   };
   ```

---

## Development

To contribute to the development of this plugin or customize it, follow these steps:

### Setup

1. Ensure the plugin is located in the `plugins` folder of your Strapi application.
2. Link the plugin source folder in your `config/plugins.js` file:
   ```javascript
   export default () => ({
       'strapi-plugin-deploy-dashboard': {
           enabled: true,
           resolve: './src/plugins/strapi-plugin-deploy-dashboard'
       }
   });
   ```

### Development Commands

The following commands are available to streamline the development process:

- **Build**: Builds the plugin for production.
   ```bash
   npm run build
   ```
- **Watch**: Watches for changes in the plugin source code and rebuilds automatically.
   ```bash
   npm run watch
   ```

## Configuration

The plugin is configured through the `config` object in your Strapi project. Here's how to set it up:

### Example Configuration

Add the following configuration to your `config/plugins.js` file:

```javascript
module.exports = {
  'strapi-plugin-deploy-dashboard': {
    config: {
      deployments: [
        {
          name: "Main Application",
          instances: [
            {
              id: "production",
              name: "Production",
              hookUrl: "https://example.com/webhook/deploy",
              requestOptions: {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: {
                  branch: "main"
                }
              }
            },
            {
              id: "staging",
              name: "Staging",
              hookUrl: "https://staging.example.com/webhook/deploy"
            }
          ]
        },
        {
          name: "Secondary Application",
          instances: [
            {
              id: "development",
              name: "Development",
              hookUrl: "https://dev.example.com/webhook/deploy"
            }
          ]
        }
      ]
    }
  }
};
```

---

### Configuration Structure

| **Property**                 | **Type**     | **Description**                                                                       | **Required** |
|------------------------------|--------------|---------------------------------------------------------------------------------------|--------------|
| `deployments`                | Array        | A list of deployment configurations. Each deployment represents a group of instances. | Yes          |
| `deployments[].name`         | String       | The name of the deployment group (e.g., "Main Application").                          | Yes          |
| `deployments[].instances`    | Array        | A list of instances within the deployment group.                                      | Yes          |
| `instances[].id`             | String       | A unique identifier for the instance (e.g., "production", "staging").                 | Yes          |
| `instances[].name`           | String       | A descriptive name for the instance (e.g., "Production").                             | Yes          |
| `instances[].hookUrl`        | String (URL) | The URL of the webhook to trigger the deployment.                                     | Yes          |
| `instances[].requestOptions` | Object       | Additional options for the request (e.g., headers, body, HTTP method).                | No           |
| `requestOptions.method`      | String       | HTTP method to use for the request (default: `POST`).                                 | No           |
| `requestOptions.headers`     | Object       | Headers to include with the request (e.g., `Content-Type: application/json`).         | No           |
| `requestOptions.body`        | Object       | The body payload to send with the request (used for `POST`, `PUT`, etc.).             | No           |

---

## Example Configurations

### Basic Deployment Configuration

```javascript
{
  name: "My Application",
    instances
:
  [
    {
      id: "prod",
      name: "Production",
      hookUrl: "https://example.com/webhook/deploy"
    },
    {
      id: "dev",
      name: "Development",
      hookUrl: "https://dev.example.com/webhook/deploy"
    }
  ]
}
```

### Deployment with Advanced Options

```javascript
{
  name: "Advanced Application",
    instances
:
  [
    {
      id: "staging",
      name: "Staging Environment",
      hookUrl: "https://staging.example.com/webhook/deploy",
      requestOptions: {
        method: "POST",
        headers: {
          "Authorization": "Bearer my-secret-token",
          "Content-Type": "application/json"
        },
        body: {
          branch: "staging",
          clearCache: true
        }
      }
    }
  ]
}
```

---

## Using the Plugin

1. Navigate to the **Deploy Dashboard** in the Strapi admin panel.
2. View the list of configured deployments and instances.
3. Trigger deployments by clicking the respective buttons for each instance.

---

## Troubleshooting

- **Invalid Webhook URL**: Ensure that the `hookUrl` is correctly formatted and accessible.
- **Authentication Issues**: If the webhook requires authentication, include appropriate headers in the `requestOptions`.
- **Debugging Errors**: Use Strapi logs to debug any issues with plugin functionality.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this plugin.

---

## License

This plugin is licensed under the MIT License.
