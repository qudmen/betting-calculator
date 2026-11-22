import BetHistoryItem from './BetHistoryItem'
import '../style/BetHistory.css'
import type { BetRecord } from '../types'

type BetHistoryProps = {
  records: BetRecord[]
  onClear: () => void
}

function BetHistory({ records, onClear }: BetHistoryProps) {
  return (
    <>
      <div className="bet-history">
        <h3 className="title">Bet History</h3>
        <div className='delete' onClick={onClear}>X</div>
      </div>
      <div className="bet-history-items">
        <div className={records.length === 0 ? '' : 'invis'}>
          History is Empty.
        </div>
        <div>
          {records.map((record) => (
            <BetHistoryItem key={record.id} {...record} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BetHistory

