export type BetDTO = {
  id: string
  name: string
  description: string
  units: number
  type: 'pendent' | 'positive' | 'negative'
  hour: string
}
