import * as SecureStore from 'expo-secure-store';

const USER_KEY = 'userData';

export const storeUser = async (user) => {
  try {
    const userJSON = JSON.stringify(user);
    await SecureStore.setItemAsync(USER_KEY, userJSON);
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

export const getUser = async () => {
  try {
    const userJSON = await SecureStore.getItemAsync(USER_KEY);
    if (userJSON) {
      return JSON.parse(userJSON);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving user:', error);
  }
};

export const setUser = async (user) => {
  try {
    const userJSON = JSON.stringify(user);
    await SecureStore.setItemAsync(USER_KEY, userJSON);
  } catch (error) {
    console.error('Error setting user:', error);
  }
};
