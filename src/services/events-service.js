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

// go to event
async function goToEvent(eventId, userId) {
    const { data, error } = await supabase
        .from('eventLikes')
        .insert([{ eventId, userId }])
        .select();
    return data;
}

// check how many people are going
async function goingPeopleToEvent(eventId) {
    const { data, error } = await supabase
        .from('eventLikes')
        .select('*')
        .eq('eventId', eventId);

    return { data, error };
}

// check if user is confirmed as going
async function isUserGoing(eventId, userId) {
    if (userId) {
        const { data, error } = await supabase
            .from('eventLikes')
            .select('*')
            .eq('eventId', eventId)
            .eq('userId', userId);

        return { data, error };
    }
    return false;
}

async function notGoToEvent(eventId, userId) {
    const { error } = await supabase
        .from('eventLikes')
        .delete()
        .eq('eventId', eventId)
        .eq('userId', userId);
}

export default {
    addEvent,
    getAllEvents,
    getEvent,
    goToEvent,
    goingPeopleToEvent,
    isUserGoing,
    notGoToEvent,
};
