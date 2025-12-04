import AsyncStorage from '@react-native-async-storage/async-storage'; // J'ai demandé a ChatGPT si localStorage existe en ReactNative
                                                                      // il m'a dit d'utiliser AsyncStorage qui fait la même chose
                                                                      // mais pour ReactNative

const useAsyncStorage = <T>(key: string) => {
  const getItem = async (): Promise<T | null> => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error getting AsyncStorage item "${key}":`, error);
      return null;
    }
  };

  const setItem = async (value: T): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting AsyncStorage item "${key}":`, error);
      throw error;
    }
  };

  const removeItem = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing AsyncStorage item "${key}":`, error);
      throw error;
    }
  };

  return { getItem, setItem, removeItem };
};

export default useAsyncStorage;
