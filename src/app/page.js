'use client'
// React imports
import { useState } from 'react'
// Data imports
import { gallenteShipBps } from '@/data/itemData'
// Util imports
import { addCommas, handleItemSelect } from '@/utils/calculationUtils'
// Component imports
import ItemCard from '@/components/ItemCard'

export default function Home() {
  const [lpCost, setLpCost] = useState(0)
  const [iskCost, setIskCost] = useState(0)
  const [manufacturingCost, setManufacturingCost] = useState(0)
  const [materialCost, setMaterialCost] = useState(0)
  const [brokersFee, setBrokersFee] = useState(0)
  const [sellPrice, setSellPrice] = useState(0)
  const [profit, setProfit] = useState(0)
  const [profitRatio, setProfitRatio] = useState(0)

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

  return (
    <>
      <h1 className='text-center text-3xl mt-4 text-white'>
        Loyalty Point to ISK Converter
      </h1>
      <section className='flex gap-4 flex-wrap text-white'>
        {gallenteShipBps.map((item, index) => (
          <ItemCard
            key={index}
            bp={item.bp}
            lp={item.lp}
            isk={item.isk}
            handleItemSelect={handleItemSelect}
            setLpCost={setLpCost}
            setIskCost={setIskCost}
          />
        ))}
      </section>
      <section className='mt-16 flex flex-col gap-4 justify-center items-center child-flex-col'>
        <div>
          <label htmlFor='lp-cost'>LP Cost:</label>
          <input
            type='number'
            id='lp-cost'
            name='LP Cost'
            value={lpCost}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='isk-cost'>ISK Cost:</label>
          <input
            type='number'
            id='isk-cost'
            name='ISK Cost'
            value={iskCost}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='manufacturing-cost'>Manufacturing Cost:</label>
          <input
            type='number'
            id='manufacturing-cost'
            name='Manufacturing Cost'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='material-cost'>Material Cost:</label>
          <input
            type='number'
            id='material-cost'
            name='Material Cost'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='brokers-fee'>Brokers Fee:</label>
          <input
            type='number'
            id='brokers-fee'
            name='Brokers Fee'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='sell-price'>Sell Price:</label>
          <input
            type='number'
            id='sell-price'
            name='Sell Price'
            onChange={handleInputChange}
            required
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
