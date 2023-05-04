import { BetDTO } from '@dtos/BetDTO'
import { Text, View } from 'react-native'

interface BetCardProps {
  data: BetDTO
}

export function BetCard({ data }: BetCardProps) {
  return (
    <View className="flex flex-row justify-between items-center p-4 bg-zinc-700 rounded-lg m-2">
      <View className="flex flex-col">
        <Text className="text-white font-bold ">{data.name}</Text>
        <Text className="text-white font-regular">{data.units} unidades</Text>
      </View>
      <View
        className={`p-2 rounded-full ${
          data.type === 'pendent'
            ? 'bg-zinc-500'
            : data.type === 'positive'
            ? 'bg-green-500'
            : 'bg-red-500'
        }`}
      />
    </View>
  )
}
