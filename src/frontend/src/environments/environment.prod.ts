/**
 * This is the configuration for production.
 *
 * To ensure "Build Once, Deploy Anywhere" application,
 * **PLEASE DONT MODIFY IT**.
 *
 * See README.md file for more information.
 */
export const environment = { production: true, settings: window['environment' as any] as any };
delete window['environment' as any];
