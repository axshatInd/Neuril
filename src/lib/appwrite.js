import { Client, Account } from 'appwrite';

/* Initial appwrite client */
const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');

/* Initial appwrite account */
const account = new Account(client);

export { account };
