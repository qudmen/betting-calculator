import { useState, useEffect } from 'react'
import './style/BetForm.css'
import BetResult from './BetResult'
import type { BetRecord } from './types'

type BetFormProps = {
  onAddRecord: (record: BetRecord) => void
}

function BetForm({ onAddRecord }: BetFormProps) {
  const [sum, setSum] = useState('')
  const [odd, setOdd] = useState('')
  const [type, setType] = useState('')
  const [submitted, setSubmitted] = useState<{
    sum: number
    odd: number
  } | null>(null)
  const [isOpenSum, setIsOpenSum] = useState(false)
  const [isOpenOdd, setIsOpenOdd] = useState(false)
  const [isOpenType, setIsOpenType] = useState(false)

  useEffect(() => {
    const savedSum = localStorage.getItem('sum')
    const savedOdd = localStorage.getItem('odd')

    if (
      savedSum === null || savedSum.trim() === '' ||
      savedOdd === null || savedOdd.trim() === ''
    ) {
      return
    }

      setSubmitted({
        sum: Number(savedSum),
        odd: Number(savedOdd),
      })
  }, [])

  const calculate = () => {
    const sumInvalid = Number(sum) < 1 || Number(sum) > 100000
    const oddInvalid = Number(odd) < 1.01 || Number(odd) > 1000
    const typeInvalid = type === '' || type === 'None'

    setIsOpenSum(sumInvalid)
    setIsOpenOdd(oddInvalid)
    setIsOpenType(typeInvalid)

    console.log(sumInvalid);

    if (sumInvalid || oddInvalid || typeInvalid) {
      console.log("not worked");
      setSubmitted(null)
      return
    }

    setSubmitted({
      sum: Number(sum),
      odd: Number(odd),
    })
    const won = Number(sum) * Number(odd)
    const profit = won - Number(sum)
    localStorage.setItem('sum', sum)
    localStorage.setItem('odd', odd)

    const record: BetRecord = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      sum: Number(sum),
      odd: Number(odd),
      type: type,
      won: won,
      profit: profit,
    }
    onAddRecord(record)

    console.log("worked");

  }

  return (
    <>
      <section className="bet-form-container flex-center">
        <div className="bet-form">
          <h3 className="bet-title">Bet Calculator</h3>

          <div className="inputs-results">

            <div className="bet-inputs">
              <div className="sum-input input-pos">
                <label htmlFor="sum">Sum:</label>
                <input type="number" id="sum" placeholder="Enter sum"
                  value={sum} onChange={(event) => setSum(event.target.value)} />
                <p className={isOpenSum ? '' : 'error-message'}>Please enter sum 1-100000</p>
              </div>

              <div className="odd-input input-pos">
                <label htmlFor="odd">Odd:</label>
                <input type="number" id="odd" placeholder="Enter odd"
                  value={odd} onChange={(event) => setOdd(event.target.value)} />
                <p className={isOpenOdd ? '' : 'error-message'}>Please enter odd 1.01-1000</p>
              </div>

              <div className="type-select input-pos">
                <label htmlFor="type">Type:</label>
                <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
                  <option value="None">Choose Option</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Slots">Slots</option>
                  <option value="Poker">Poker</option>
                  <option value="Roulette">Roulette</option>
                </select>
                <p className={isOpenType ? '' : 'error-message'}>Please choose type </p>
              </div>
            </div>

            <div className="bet-results">
              {submitted && (
                <BetResult sum={submitted.sum} odd={submitted.odd} />
              )}
            </div>

          </div>
          <div className="submit-button-container">
            <button className="submit-button" type="submit" onClick={calculate}>Calculate</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BetForm
