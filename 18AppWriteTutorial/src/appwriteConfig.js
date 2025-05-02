import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // No /v1
  .setProject('681435310015ab109c78'); // Your actual project ID

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
