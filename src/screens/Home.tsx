import { BetCard } from '@components/BetCard'
import { EmptyBetsList } from '@components/EmptyBetsList'
import { BetDTO } from '@dtos/BetDTO'
import { BetsContext } from '@contexts/BetsContext'

import { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'

export function Home() {
  // const { bets } = useContext(BetsContext)

  const bets = [
    {
      title: '26.08.22',
      data: [
        {
          id: '2',
          name: 'Escanteios em Vasco x Flamengo',
          type: 'negative',
          description: '+ de 6 escanteios na partida',
          hour: '20:00',
          units: 2,
        },
      ],
    },
  ]
  return (
    <View className="flex-1 items-center px-4 py-16 bg-zinc-900 gap-4">
      <View className="flex-row items-center justify-between bg-zinc-800 rounded-lg p-4 w-full">
        <View>
          <Text className="text-white font-bold">Banca atual</Text>
          <Text className="text-white font-regular">R$200,00</Text>
        </View>
        <View className="h-full w-8 text-white font-regular" />
        <Text className="text-white font-regular">
          Você tem 6 bets pendentes
        </Text>
      </View>
      <View className="flex w-full align-center justify-center py-8">
        <Text className="justify-start items-start text-white font-bold text-3xl pb-4">
          Bets resolvidas
        </Text>
        <View className="w-full h-0.5 bg-zinc-700 mb-2" />
        <SectionList
          sections={bets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BetCard data={item as BetDTO} />}
          renderSectionHeader={({ section }) => (
            <Text className="text-white font-bold">{section.title}</Text>
          )}
          ListEmptyComponent={() => <EmptyBetsList />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
