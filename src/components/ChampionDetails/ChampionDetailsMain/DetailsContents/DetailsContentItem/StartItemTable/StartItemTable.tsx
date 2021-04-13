import { startItemData, StartItemType } from '../itemData';

function StartItemTable() {
  return (
    <div className="box-content">
      <table>
        <thead>
          <tr>
            <th className="title">시작 아이템</th>
            <th className="sort">
              <div>픽률</div>
            </th>
            <th className="sort">
              <div>승률</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {startItemData.map((data: StartItemType, i: number) => (
            <tr key={i}>
              <td className="cell-data">
                <ul>
                  {['first', 'second', 'third'].map((url: string, i) => (
                    <>
                      {data[url] && (
                        <>
                          <li key={i + 'list'}>
                            <img
                              src={`//opgg-static.akamaized.net/images/lol/item/${data[url]}.png?image=q_auto:best&v=1617159801`}
                              alt="시작 아이템"
                            />
                          </li>
                          <li className="arrow" key={i + 'arrow'}></li>
                        </>
                      )}
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

export default StartItemTable;
