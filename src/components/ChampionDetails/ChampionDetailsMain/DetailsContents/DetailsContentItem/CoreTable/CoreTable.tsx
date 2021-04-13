import { coreData, CoreType } from '../itemData';

function CoreTable() {
  return (
    <div className="box-content">
      <table>
        <thead>
          <tr>
            <th className="title">핵심 빌드</th>
            <th className="sort">
              <div>픽률</div>
            </th>
            <th className="sort">
              <div>승률</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {coreData.map((data: CoreType, i: number) => (
            <tr key={i}>
              <td className="cell-data">
                <ul>
                  {['first', 'second', 'third'].map((url: string, i) => (
                    <>
                      <li key={i + 'list'}>
                        <img
                          src={`//opgg-static.akamaized.net/images/lol/item/${data[url]}.png?image=q_auto:best&v=1617159801`}
                          alt=""
                        />
                      </li>
                      <li className="arrow">
                        <img
                          src="//opgg-static.akamaized.net/images/site/champion/blet.png"
                          alt=""
                        />
                      </li>
                    </>
                  ))}
                </ul>
              </td>
              <td className="cell-pick-rate">
                {data.pickRate}%<em>{data.pickCount}</em>
              </td>
              <td className="cell-win-rate">{data.winRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoreTable;
