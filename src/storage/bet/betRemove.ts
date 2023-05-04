import AsyncStorage from '@react-native-async-storage/async-storage'

import { BET_COLLECTION } from '../storageConfig'

import { betsGetAll } from './betsGetAll'

export async function betRemoveByName(id: string) {
  try {
    const storedBets = await betsGetAll()

    const bets = storedBets.filter((bet) => {
      bet.id !== id
    })

    await AsyncStorage.setItem(BET_COLLECTION, JSON.stringify(bets))
  } catch (error) {
    throw error
  }
}
