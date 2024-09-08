import NewsMenu from "./NewsMenu";
import NewsList from "./NewsList";

/**
 * Блок новостей
 */
export default function News() {
  const menu = [];
  const date = new Date();
  const news = [];

  return (
    <>
      <NewsMenu items={menu} date={date}/>
      <NewsList items={news}/>
    </>
  );
}