import '../style/BetHistoryItem.css'
import type { BetRecord } from '../types'

function BetHistoryItem({ id, date, sum, odd, type, won, profit }: BetRecord) {
  const details = [
    { name: 'id', value: id },
    { name: 'date', value: date },
    { name: 'sum', value: sum },
    { name: 'odd', value: odd },
    { name: 'type', value: type },
    { name: 'won', value: won },
    { name: 'profit', value: profit },
  ]

  return (
    <div className="bet-history-item">
      {details.map(({ name, value }) => (
        <p key={name} className="bet-details">
          {name}: {value}
        </p>
      ))}
    </div>
  )
}

export default BetHistoryItem

