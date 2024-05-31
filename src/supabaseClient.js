
import { createClient } from '@supabase/supabase-js';

// const isTestEnvironment = process.env.NEXT_PUBLIC_IS_TEST_ENV === 'true';

// const supabaseUrl = isTestEnvironment ? process.env.REACT_APP_SUPABASE_URL_TEST : process.env.REACT_APP_SUPABASE_URL;

// const supabaseKey = isTestEnvironment ? process.env.REACT_APP_SUPABASE_ANON_KEY_TEST : process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabaseUrl = 'https://mpqxgjnwnkdyynydgaxe.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXhnam53bmtkeXlueWRnYXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTA5MTIsImV4cCI6MjAzMjU2NjkxMn0.JJMo9vx74rsXlmvr6K831jt4YVxlbJs0UAxDHtRLlq8';

export const supabase = createClient(supabaseUrl, supabaseKey);
