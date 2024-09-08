import TVProgramItem from "./TVProgramItem";

/**
 * Блок телепрограмма
 * Запрос данных, ссылки на прямой эфир и вывод телепрограммы
 *
 * @param {string} title
 */
export default function TVProgram({title}) {
  const link = '';
  const data = [];

  return (
    <>
      {title} {link}
      {data.map(item => <TVProgramItem item={item} />)}
    </>
  );
}