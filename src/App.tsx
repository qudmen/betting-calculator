import { useEffect, useState } from 'react'
import './style/App.css'
import BetForm from './BetForm'
import BetHistory from './BetHistory'
import type { BetRecord } from './types'

function App() {
  const [records, setRecords] = useState<BetRecord[]>(() => {
    const savedRecords = localStorage.getItem('records')
    const parsedRecords = savedRecords
      ? JSON.parse(savedRecords) as (BetRecord | null)[]
      : []
    return parsedRecords.filter((record) => record !== null).slice(0, 5)
  })

  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  return (
    <>
      <div className="app-main">
        <aside className="history">
          <BetHistory records={records} onClear={() => setRecords([])} />
        </aside>
        <main className="calculator">
          <BetForm
            onAddRecord={(record) =>
              setRecords((previousRecords) =>
                [record, ...previousRecords].slice(0, 5)
              )
            }
          />
        </main>
      </div>
    </>
  )
}

export default App
