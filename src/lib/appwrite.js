import { Client, Account, Avatars, Databases } from 'appwrite';

/* Initial appwrite client */
const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');

/* Initial appwrite account */
const account = new Account(client);

/* Initial appwrite avatars */
const avatars = new Avatars(client);

/* Initial appwrite Databases */
const databases = new Databases(client);

export { account, avatars, databases };
