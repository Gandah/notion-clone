import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('⚠️ Database URL not specified');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 })
const db = drizzle(client, { schema });

const migrationsDb = async () => {

  try {
    console.log('🟠 Migrating client...')
    await migrate(db, { migrationsFolder: 'migrations'})
    console.log('🟢 Migration sucessful.')
  } catch(error){
    console.error('🚨 Error migrating client:', error);
  }
} //keeps up schemas up to date with our database

migrationsDb();
export default db;