import * as SecureStore from 'expo-secure-store';

const PATIENT_KEY = 'patient';

export const storePatient = async (patient) => {
  try {
    const patientJSON = JSON.stringify(patient);
    await SecureStore.setItemAsync(PATIENT_KEY, patientJSON);
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

export const getPatient = async () => {
  try {
    const patientJSON = await SecureStore.getItemAsync(PATIENT_KEY);
    if (userJSON) {
      return JSON.parse(patientJSON);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving user:', error);
  }
};

export const setPatient= async (patient) => {
  try {
    const patientJSON = JSON.stringify(patient);
    await SecureStore.setItemAsync(PATIENT_KEY, patientJSON);
  } catch (error) {
    console.error('Error setting user:', error);
  }
};
