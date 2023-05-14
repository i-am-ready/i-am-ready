/**
 * This is the configuration for development.
 *
 * See README.md file for more information about
 * "Build Once, Deploy Anywhere" and production configuration.
 */
const API_DOMAIN = 'localhost:5500';

export const environment = {
  production: false,
  settings: {
    environmentName: 'DEV',
    apiRootUrl: 'http://' + API_DOMAIN,
    apiDomain: API_DOMAIN,
    geoIpApiKey: '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',
    geoIpApiAccountId: '865043'
  }
};
