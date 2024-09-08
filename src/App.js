import './App.css';
import News from "./components/News/News";
import Currency from "./components/Currency/Currency";
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import Whether from "./components/Whether/Whether";
import MapBlock from "./components/MapBlock/MapBlock";
import Broadcast from "./components/Broadcast/Broadcast";
import HistoryBlock from "./components/HistoryBlock/HistoryBlock";
import TVProgram from "./components/TVProgram/TVProgram";

export default function App() {
  return (
    <>
      <News />
      <Currency />
      <Banner place="right" />
      <Search />
      <Banner place="center" />
      <Whether title='Погода' />
      <MapBlock title='Карта' />
      <Broadcast title='Эфир' />
      <HistoryBlock title='Посещаемое' />
      <TVProgram title='Телепрограмма' />
    </>
  );
}