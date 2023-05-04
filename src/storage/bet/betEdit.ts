import AsyncStorage from '@react-native-async-storage/async-storage'

import { BET_COLLECTION } from '../storageConfig'

import { betsGetAll } from './betsGetAll'
import { BetStorageDTO } from '@dtos/BetStorageDTO'

export async function betEdit(editBet: BetStorageDTO) {
  try {
    const storedBets = await betsGetAll()

    const bets = storedBets.map(
      (bet) =>
        bet.data.id === editBet.data.id && {
          title: editBet.title,
          data: {
            id: editBet.data.id,
            name: editBet.data.name,
            type: editBet.data.type,
            hour: editBet.data.hour,
            description: editBet.data.description,
            units: editBet.data.units,
          },
        },
    )

    await AsyncStorage.setItem(BET_COLLECTION, JSON.stringify(bets))
  } catch (error) {
    throw error
  }
}
