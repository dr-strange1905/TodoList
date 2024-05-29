
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpqxgjnwnkdyynydgaxe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXhnam53bmtkeXlueWRnYXhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjk5MDkxMiwiZXhwIjoyMDMyNTY2OTEyfQ.xaceUA4bWT0wWtVoBFNiOyYHAvQfL24VsG5Wk1ZriAA';

export const supabase = createClient(supabaseUrl, supabaseKey);
