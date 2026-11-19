import './style/BetHistoryItem.css'
import type {BetRecord} from './types'

function BetHistoryItem({id, date, sum, odd, type, won, profit}: BetRecord) {
  return (
    <>
      <div className="bet-history-item">
        <p className="bet-details pt-3">id: {id}</p>
        <p className='bet-details'>date: {date}</p>
        <p className='bet-details'>sum: {sum}</p>
        <p className='bet-details'>odd: {odd}</p>
        <p className='bet-details'>type: {type}</p>
        <p className='bet-details'>won: {won}</p>
        <p className='bet-details'>profit: {profit}</p>
      </div>
    </>
  )
}

export default BetHistoryItem
