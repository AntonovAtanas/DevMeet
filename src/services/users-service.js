import supabase from './supabase';

async function register(userData) {
    let { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
            data: {
                firstName: userData.firstName,
                lastName: userData.lastName,
            },
        },
    });
    return { data, error };
}

export const userService = {
    register,
};
