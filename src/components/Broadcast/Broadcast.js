import BroadcastItem from "./BroadcastItem";

/**
 * Блок эфира
 * Запрос данных и вывод списка эфиров
 *
 * @param {string} title заголовок
 */
export default function Broadcast({title}) {
  const data = [];

  return data.map(item => <BroadcastItem link={item.link} title={data.title} source={data.source}/>);
}