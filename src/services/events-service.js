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
    const { data, error } = await supabase
        .from('Events')
        .select('*')
        .order('date', { ascending: true });
    return { data, error };
}

// get upcoming 5 events
async function getUpcomingFiveEvents() {
    const { data, error } = await supabase
        .from('Events')
        .select('*')
        .order('date', { ascending: true })
        .limit(5);

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
        .from('eventGoing')
        .insert([{ eventId, userId }])
        .select();
    return data;
}

// not go to event
async function notGoToEvent(eventId, userId) {
    const { error } = await supabase
        .from('eventGoing')
        .delete()
        .eq('eventId', eventId)
        .eq('userId', userId);
}

// check how many people are going
async function goingPeopleToEvent(eventId) {
    const { data, error } = await supabase
        .from('eventGoing')
        .select('*')
        .eq('eventId', eventId);

    return { data, error };
}

// check user events which he will go to
async function userGoingEvents(userId) {
    const { data, error } = await supabase
        .from('eventGoing')
        .select('eventId')
        .eq('userId', userId);

    const eventIds = data.map((events) => events.eventId);

    const events = await populatedUserGoingEvents(eventIds);

    return { events };
}

// populate the user events which he will go
async function populatedUserGoingEvents(eventIds) {
    const { data } = await supabase
        .from('Events')
        .select('*')
        .in('id', eventIds);

    return { data };
}

// check if user is confirmed as going
async function isUserGoing(eventId, userId) {
    if (userId) {
        const { data, error } = await supabase
            .from('eventGoing')
            .select('*')
            .eq('eventId', eventId)
            .eq('userId', userId);

        return { data, error };
    }
    return false;
}

// edit an event
async function editEvent(eventData) {
    const { data, error } = await supabase
        .from('Events')
        .upsert(eventData)
        .select();

    return { data, error };
}

// delete an event
async function deleteEvent(eventId) {
    const { error } = await supabase.from('Events').delete().eq('id', eventId);
}

export default {
    addEvent,
    getAllEvents,
    getEvent,
    goToEvent,
    goingPeopleToEvent,
    isUserGoing,
    notGoToEvent,
    deleteEvent,
    editEvent,
    getUpcomingFiveEvents,
    userGoingEvents,
};
