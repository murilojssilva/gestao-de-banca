import AsyncStorage from '@react-native-async-storage/async-storage'

import { BETTING_BANK_COLLECTION } from '../storageConfig'

import { bettingBankGetAll } from './bettingBankGetAll'

export async function betRemoveByName(id: string) {
  try {
    const storedBets = await bettingBankGetAll()

    const bettingBank = storedBets.filter((bettingBank) => {
      bettingBank.id !== id
    })

    await AsyncStorage.setItem(
      BETTING_BANK_COLLECTION,
      JSON.stringify(bettingBank),
    )
  } catch (error) {
    throw error
  }
}
