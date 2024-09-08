import Menu from "./Menu";
import SearchForm from "./SearchForm";

/**
 * Основной блок поиска
 */
export default function Search() {
  const menu = [];
  const logo = '';
  const note = '';

  return (
    <>
      <Menu items={menu} />
      <SearchForm logo={logo} note={note} />
    </>
  );
}