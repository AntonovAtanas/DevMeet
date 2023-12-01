import supabase from './supabase';

async function addEvent(newEvent) {
    const { data, error } = await supabase
        .from('Events')
        .insert([newEvent])
        .select();
    return { data, error };
}

export default {
    addEvent,
};
