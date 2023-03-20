// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="innerCon">
      <h1 className="mainH">Cryptocurrency Tracker</h1>
      <img
        className="mainImg"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <ul className="listCon">
        <li className="titleList">
          <h1 className="titListH">Coin Type</h1>
          <div className="titCurCon">
            <h1 className="titListP">USD</h1>
            <h1 className="titListP">EURO</h1>
          </div>
        </li>
        {cryptoList.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
