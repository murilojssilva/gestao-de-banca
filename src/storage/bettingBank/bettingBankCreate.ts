import AsyncStorage from '@react-native-async-storage/async-storage'
import { BETTING_BANK_COLLECTION } from '../storageConfig'
import { bettingBankGetAll } from './bettingBankGetAll'
import { BetStorageDTO } from '@dtos/BetStorageDTO'

export async function bettingBankCreate(food: BetStorageDTO) {
  try {
    const storedBettingBank = await bettingBankGetAll()

    const storage = JSON.stringify([...storedBettingBank, food])
    await AsyncStorage.setItem(BETTING_BANK_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
