import dotenv from 'dotenv';
dotenv.config(); 

// /scripts/testConnection.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

async function testConnection() {
  const { data, error } = await supabase
    .from('order_aggregator')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error connecting to Supabase:', error.message);
  } else {
    console.log('Connected to Supabase:', data);
  }
}

testConnection();
