import { AsyncStorage } from "react-native";

export async function createAsyncStorage(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

export async function getAsyncStorage(key) {
  try {
    let userData = await AsyncStorage.getItem(key);
    let data = JSON.parse(userData);
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
export async function removeAsyncStorage(key) {
  try {
    await AsyncStorage.removeItem(key);

    return;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
