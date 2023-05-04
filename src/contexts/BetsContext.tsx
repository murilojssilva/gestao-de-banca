import React, {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useLayoutEffect,
} from 'react'
import { BetStorageDTO } from '@dtos/BetStorageDTO'
import { betsGetAll } from '@storage/bet/betsGetAll'

interface IBetContextProps {
  bets: BetStorageDTO[]
}

export const BetsContext = createContext({} as IBetContextProps)

interface BetsProviderProps {
  children: ReactNode
}

export function BetsProvider({ children }: BetsProviderProps) {
  const [bets, setBets] = useState<BetStorageDTO[]>([])

  async function fetchBets() {
    try {
      const data = await betsGetAll()
      setBets(data)
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(
    useCallback(() => {
      fetchBets()
    }, [bets]),
  )

  return (
    <BetsContext.Provider
      value={{
        bets,
      }}
    >
      {children}
    </BetsContext.Provider>
  )
}
