import CurrencyItem from "./CurrencyItem";

/**
 * Вывод списка валют
 * @param {array} currencyList курсы валют
 */
export default function CurrencyList(currencyList) {
  return currencyList.map(item => {
    <CurrencyItem name={item.name} exchange={item.exchange} diff={item.diff}/>
  });
}