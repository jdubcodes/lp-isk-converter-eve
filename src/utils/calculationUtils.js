export function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const handleItemSelect = (item, setLpCost, setIskCost) => {
  setLpCost(item.lp)
  setIskCost(item.isk)
  return { lp: item.lp, isk: item.isk }
}
