import { bootsData, BootsType } from '../itemData';

function CoreTable() {
  return (
    <div className="box-content">
      <table>
        <thead>
          <tr>
            <th className="title">신발</th>
            <th className="sort">
              <div>픽률</div>
            </th>
            <th className="sort">
              <div>승률</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {bootsData.map((data: BootsType, i: number) => (
            <tr key={i}>
              <td className="cell-data">
                <div className="single-item">
                  <img
                    src={`//opgg-static.akamaized.net/images/lol/item/${data.code}.png?image=q_auto:best&v=1617159801`}
                    alt=""
                  />
                  <span>{data.name}</span>
                </div>
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
