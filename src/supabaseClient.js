
import { createClient } from '@supabase/supabase-js';

const isTestEnvironment = process.env.NODE_ENV_IS_TEST_ENV === 'true';

 const supabaseUrl = isTestEnvironment ? process.env.REACT_APP_SUPABASE_URL_TEST : process.env.REACT_APP_SUPABASE_URL;

 const supabaseKey = isTestEnvironment ? process.env.REACT_APP_SUPABASE_ANON_KEY_TEST : process.env.REACT_APP_SUPABASE_ANON_KEY;

console.log(process.env);

export const supabase = createClient(supabaseUrl, supabaseKey);
