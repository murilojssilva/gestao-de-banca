import AsyncStorage from '@react-native-async-storage/async-storage'
import { BETTING_BANK_COLLECTION } from '../storageConfig'
import { BettingBankDTO } from '@dtos/BettingBankDTO'

export async function bettingBankGetAll() {
  try {
    const storage = await AsyncStorage.getItem(BETTING_BANK_COLLECTION)
    const bettingBank: BettingBankDTO = storage ? JSON.parse(storage) : {}
    return bettingBank
  } catch (error) {
    throw error
  }
}
