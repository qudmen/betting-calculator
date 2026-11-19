import './style/BetResult.css'

type BetResultProps = {
  sum: number;
  odd: number;
};

function BetResult({ sum, odd }: BetResultProps) {
  const won = sum * odd;
  const profit = won - sum;

  return (
    <>
      <div className="bet-results-container">
        <div className="won flex-center">
          <p>Won:</p>
          <p>{won.toFixed(2)}</p>
        </div>
        <div className="profit flex-center">
          <p>Profit:</p>
          <p>{profit.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default BetResult
