import supabase from './supabase';

// add an event
async function addEvent(newEvent) {
    const { data, error } = await supabase
        .from('Events')
        .insert([newEvent])
        .select();
    return { data, error };
}

// get all events
async function getAllEvents() {
    const { data, error } = await supabase.from('Events').select('*');
    return { data, error };
}

// get specific event
async function getEvent(eventId) {
    const { data, error } = await supabase
        .from('Events')
        .select()
        .eq('id', eventId);

    return { data, error };
}

export default {
    addEvent,
    getAllEvents,
    getEvent,
};
