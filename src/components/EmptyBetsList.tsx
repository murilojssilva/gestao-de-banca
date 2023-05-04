import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export function EmptyBetsList() {
  return (
    <View className="flex items-center justify-center">
      <Feather color="white" name="alert-triangle" size={60} />
      <Text className="text-white font-bold text-2xl">
        Não há bets cadastradas.
      </Text>
    </View>
  )
}
