import MenuItem from "./MenuItem";

/**
 * Вывод списка пунктов меню
 *
 * @param {array} items список пунктов меню
 */
export default function Menu({items}) {
  return items.map(item => {
    <MenuItem title={item.title} link={item.link} />
  });
}