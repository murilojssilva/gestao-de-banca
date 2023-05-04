import { StatusBar } from 'expo-status-bar'
import { BetsProvider } from '@contexts/BetsContext'
import { Routes } from '@routes/index'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <>
      <BetsProvider>{fontsLoaded ? <Routes /> : <Loading />}</BetsProvider>
      <StatusBar style="light" />
    </>
  )
}
