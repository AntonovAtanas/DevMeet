import supabase from './supabase';

async function login(userData) {
    let { data, error } = await supabase.auth.signInWithPassword(userData);

    return {
        data,
        error,
    };
}

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

async function logout() {
    const { error } = await supabase.auth.signOut();

    localStorage.clear();
    return error;
}

export const userService = {
    login,
    register,
    logout,
};
