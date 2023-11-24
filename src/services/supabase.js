import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://gpdhdymopgcreltknmgj.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZGhkeW1vcGdjcmVsdGtubWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NTc0MjgsImV4cCI6MjAxNjMzMzQyOH0.BW-37AAGXS7VMR4XLZXpBpBtoM9KieBJxTj-eMmcKRI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
