import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrcnyfjulqcppwtjzogm.supabase.co'; // ← paste your actual SupaBase URL here
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyY255Zmp1bHFjcHB3dGp6b2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NzQ0OTQsImV4cCI6MjA2NzA1MDQ5NH0.oAF_67POHoUX0IKW5f7fmLzaR_IQM_G9nEnk20y2xi8'; // ← paste your actual anon key here

export const supabase = createClient(supabaseUrl, supabaseKey);
