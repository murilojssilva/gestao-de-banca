import AsyncStorage from '@react-native-async-storage/async-storage'
import { BET_COLLECTION } from '../storageConfig'
import { betsGetAll } from './betsGetAll'
import { BetStorageDTO } from '@dtos/BetStorageDTO'

export async function betCreate(food: BetStorageDTO) {
  try {
    const storedBets = await betsGetAll()

    const storage = JSON.stringify([...storedBets, food])
    await AsyncStorage.setItem(BET_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
