import HistoryItem from "./HistoryItem";

/**
 * Блок посещаемое
 *
 * @param {string} title заголовок блока
 */
export default function HistoryBlock({title}) {
  const data = [];

  return (
    <>
      {data.map(item => <HistoryItem section={item.section} title={item.title} />)}
    </>
  );
}