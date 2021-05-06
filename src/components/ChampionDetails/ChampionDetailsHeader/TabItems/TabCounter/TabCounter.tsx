import { TabItems, TabItemsChampionInfo, TabItemsWinRate, TabItemsCounter } from '../styles';
import CounterData from './CounterData';
function TabCounter() {
  // console.log(CounterData);
  return (
    <TabItems>
      <tbody>
        {CounterData.map((data) => (
          <tr key={data.id}>
            <TabItemsChampionInfo>
              <img
                src={`//opgg-static.akamaized.net/images/lol/champion/${data.nameEng}.png?image=c_scale,q_auto,w_34&v=1617159801`}
                alt={data.nameKor}
              />
              {data.nameKor}
            </TabItemsChampionInfo>
            <TabItemsWinRate>
              승률 <b>{data.winRate}%</b>
            </TabItemsWinRate>
            <TabItemsCounter>
              카운터
              <img src="//opgg-static.akamaized.net/images/site/champion/blet.png" />
            </TabItemsCounter>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </TabItems>
  );
}

export default TabCounter;
