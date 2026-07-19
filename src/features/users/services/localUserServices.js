const STORAGE_KEY = "local_users";
export const getLocalUsers = () => {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
};
export const saveLocalUsers = (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
export const addLocalUser = (user) => {
    const users = getLocalUsers();
    const newUser = {
        ...user,
        id: Date.now(),
    };
    users.unshift(newUser);
    saveLocalUsers(users);
    return newUser;
};
export const deleteLocalUser = (id) => {
    const users = getLocalUsers();
    const updatedUsers = users.filter((user) => user.id !== id);
    saveLocalUsers(updatedUsers);
};
export const updateLocalUser = (updatedUser) => {
    const users = getLocalUsers();
    const index = users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        saveLocalUsers(users);
    }
};
export const getLocalUserById = (id) => {
    return getLocalUsers().find((user) => user.id === id);
};
