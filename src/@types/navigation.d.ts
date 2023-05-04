import { BetStorageDTO } from '../dtos/BetStorageDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      new_bet: undefined
      details: BetStorageDTO
      edit_bet: BetStorageDTO
    }
  }
}
