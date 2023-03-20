// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails

  return (
    <li className="listItem">
      <div className="logoCon">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="logoH">{currencyName}</p>
      </div>
      <div className="valueCon">
        <p className="logoP">{usdValue}</p>
        <p className="logoP">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
