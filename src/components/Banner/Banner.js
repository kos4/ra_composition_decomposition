import BannerRight from "./BannerRight";
import BannerCenter from "./BannerCenter";

/**
 * Генерация баннера
 *
 * @param {string} place тип банера
 */
export default function Banner({place}) {
  const data = {};
  let banner;

  switch (place) {
    case 'right':
      banner = <BannerRight image={data.image} title={data.title} text={data.text} />
      break;

    case 'center':
      banner = <BannerCenter image={data.image} />
      break;
  }

  return banner;
}