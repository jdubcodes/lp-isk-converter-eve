// Util imports
import { addCommas } from '@/utils/calculationUtils'

const ItemCard = ({
  key,
  bp,
  lp,
  isk,
  handleItemSelect,
  setLpCost,
  setIskCost,
}) => {
  return (
    <div
      key={key}
      className='p-4 w-[280px] h-[88px] flex flex-col gap-1 justify-center items-left text-sm bg-dark-2 rounded-md cursor-pointer'
      onClick={() => handleItemSelect({ lp, isk }, setLpCost, setIskCost)}
    >
      <h4>{bp}</h4>
      <ul className='text-xs text-light-1'>
        <li>
          {addCommas(lp)} LP + {addCommas(isk)} ISK
        </li>
      </ul>
    </div>
  )
}

export default ItemCard
