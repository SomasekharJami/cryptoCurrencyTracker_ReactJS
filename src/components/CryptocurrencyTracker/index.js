// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const newList = data.map(eachList => ({
      currencyName: eachList.currency_name,
      usdValue: eachList.usd_value,
      euroValue: eachList.euro_value,
      id: eachList.id,
      currencyLogo: eachList.currency_logo,
    }))

    this.setState({
      cryptoList: newList,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptoList} = this.state

    return isLoading ? (
      <div data-testid="loader" className="mainCon">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="mainCon">
        <CryptocurrenciesList cryptoList={cryptoList} />
      </div>
    )
  }
}

export default CryptocurrencyTracker
