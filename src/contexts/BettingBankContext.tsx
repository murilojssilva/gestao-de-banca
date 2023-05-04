import React, {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useLayoutEffect,
} from 'react'
import { bettingBankGetAll } from '@storage/bettingBank/bettingBankGetAll'
import { BettingBankDTO } from '@dtos/BettingBankDTO'

interface IBetContextProps {
  bettingBank: BettingBankDTO
}

export const BettingBankContext = createContext({} as IBetContextProps)

interface BetsProviderProps {
  children: ReactNode
}

export function BetsProvider({ children }: BetsProviderProps) {
  const [bettingBank, setBettingBank] = useState<BettingBankDTO>([])

  async function fetchBets() {
    try {
      const data = await bettingBankGetAll()
      setBettingBank(data)
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(
    useCallback(() => {
      fetchBets()
    }, [bettingBank]),
  )

  return (
    <BettingBankContext.Provider
      value={{
        bettingBank,
      }}
    >
      {children}
    </BettingBankContext.Provider>
  )
}
