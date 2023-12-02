import supabase from './supabase';

async function addEvent(newEvent) {
    const { data, error } = await supabase
        .from('Events')
        .insert([newEvent])
        .select();
    return { data, error };
}

async function getAllEvents() {
    const { data, error } = await supabase.from('Events').select('*');
    return { data, error };
}

async function getEvent(eventId) {}

export default {
    addEvent,
    getAllEvents,
};
