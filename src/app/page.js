'use client'

import { gallenteShipBps } from '../../public/data'

import { useState } from 'react'

export default function Home() {
  const [lpCost, setLpCost] = useState(0)
  const [iskCost, setIskCost] = useState(0)
  const [manufacturingCost, setManufacturingCost] = useState(0)
  const [materialCost, setMaterialCost] = useState(0)
  const [brokersFee, setBrokersFee] = useState(0)
  const [sellPrice, setSellPrice] = useState(0)
  const [profit, setProfit] = useState(0)
  const [profitRatio, setProfitRatio] = useState(0)

  const handleShipSelect = (item) => {
    setLpCost(item.lp)
    setIskCost(item.isk)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case 'LP Cost':
        setLpCost(parseFloat(value))
        break
      case 'ISK Cost':
        setIskCost(parseFloat(value))
        break
      case 'Manufacturing Cost':
        setManufacturingCost(parseFloat(value))
        break
      case 'Material Cost':
        setMaterialCost(parseFloat(value))
        break
      case 'Brokers Fee':
        setBrokersFee(parseFloat(value))
        break
      case 'Sell Price':
        setSellPrice(parseFloat(value))
        break
      default:
        break
    }
  }

  const calculateProfit = () => {
    const totalCost =
      parseFloat(iskCost) +
      parseFloat(materialCost) +
      parseFloat(manufacturingCost) +
      parseFloat(brokersFee)
    const profit = parseFloat(sellPrice) - totalCost
    const profitRatio = profit / lpCost
    setProfit(profit)
    setProfitRatio(profitRatio)
    return profit
  }

  const addCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <h1 className='text-center text-3xl mt-4'>
        Loyalty Point to ISK Converter
      </h1>
      <section className='flex gap-4 flex-wrap'>
        {gallenteShipBps.map((item, index) => (
          <div key={index} onClick={() => handleShipSelect(item)}>
            <h4>{item.bp}</h4>
            <ul>
              <li>{addCommas(item.lp)} LP</li>
              <li>
                {addCommas(item.isk)} ISK{' '}
                {item.altCurrency
                  ? `or ${item.altCurrency} x ${item.altCost}`
                  : ''}
              </li>
            </ul>
          </div>
        ))}
      </section>
      <section className='mt-16 flex flex-col gap-4 justify-center items-center'>
        <div className='flex gap-2'>
          <label htmlFor='lp-cost'>LP Cost:</label>
          <input
            type='number'
            id='lp-cost'
            name='LP Cost'
            value={lpCost}
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='isk-cost'>ISK Cost:</label>
          <input
            type='number'
            id='isk-cost'
            name='ISK Cost'
            value={iskCost}
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='manufacturing-cost'>Manufacturing Cost:</label>
          <input
            type='number'
            id='manufacturing-cost'
            name='Manufacturing Cost'
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='material-cost'>Material Cost:</label>
          <input
            type='number'
            id='material-cost'
            name='Material Cost'
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='brokers-fee'>Brokers Fee:</label>
          <input
            type='number'
            id='brokers-fee'
            name='Brokers Fee'
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='sell-price'>Sell Price:</label>
          <input
            type='number'
            id='sell-price'
            name='Sell Price'
            onChange={handleInputChange}
            required
            className='text-black'
          />
        </div>
      </section>
      <section>
        <button
          onClick={calculateProfit}
          className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
        >
          Calculate Profit
        </button>
        <p>ISK Profit: {addCommas(profit)} ISK</p>
        <p>ISK per LP: {parseFloat(profitRatio).toFixed(2)} ISK / LP</p>
      </section>
    </>
  )
}
