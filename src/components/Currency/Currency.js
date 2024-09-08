import CurrencyList from "./CurrencyList";

/**
 * Блок валют
 */
export default function Currency() {
  const currencyList = [];

  return (
    <CurrencyList items={currencyList}/>
  );
}