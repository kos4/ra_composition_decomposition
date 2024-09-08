import NewsItem from "./NewsItem";

/**
 * Вывод списка новостей
 *
 * @param {string} icon путь до иконки
 * @param {string} title заголовок новости
 * @param {string} link ссылка на новость
 */
export default function NewsList({items}) {
  return items.map(item => {
    <NewsItem icon={item.icon} title={item.title} link={item.link}/>
  });
}