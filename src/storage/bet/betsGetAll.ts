import AsyncStorage from '@react-native-async-storage/async-storage'
import { BET_COLLECTION } from '../storageConfig'
import { BetStorageDTO } from '@dtos/BetStorageDTO'

export async function betsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(BET_COLLECTION)
    const bets: BetStorageDTO[] = storage ? JSON.parse(storage) : []
    return bets
  } catch (error) {
    throw error
  }
}
