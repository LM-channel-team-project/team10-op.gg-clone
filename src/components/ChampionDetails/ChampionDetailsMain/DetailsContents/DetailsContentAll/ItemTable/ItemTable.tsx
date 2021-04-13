import { coreDataOverview, bootsDataOverview } from '../../DetailsContentItem/itemData';

function ItemTable() {
  console.log(coreDataOverview[0]);
  return (
    <>
      <thead>
        <tr>
          <th colSpan={2}>
            <a href="#">
              <h2>추천 아이템 빌드</h2>
            </a>
          </th>
          <th>
            <span>픽률</span>
          </th>
          <th>
            <span>승률</span>
          </th>
          <th>
            <a href="#">
              <img src="//opgg-static.akamaized.net/images/site/champion/detail-icon.png" alt="" />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={2}>시작 아이템</th>
          <td>
            <ul>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/1054.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
              <li className="arrow"></li>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/2003.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
            </ul>
          </td>
          <td className="pick-rate">
            <strong>51.02%</strong>
            <span>7,506</span>
          </td>
          <td className="win-rate">
            <strong>51.75%</strong>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/1055.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
              <li className="arrow"></li>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/2003.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
            </ul>
          </td>
          <td className="pick-rate">
            <strong>45.26%</strong>
            <span>7,012</span>
          </td>
          <td className="win-rate">
            <strong>45.54%</strong>
          </td>
          <td></td>
        </tr>
        <tr>
          <th rowSpan={5}>추천 빌드</th>
          <td>
            <ul>
              {['6631', '3053', '3742'].map((item, i) => (
                <>
                  <li key={i}>
                    <img
                      src={`//opgg-static.akamaized.net/images/lol/item/${item}.png?image=q_auto:best&v=1617159801`}
                      alt=""
                    />
                  </li>
                  <li className="arrow" key={i + 'arrow'}>
                    <img src="//opgg-static.akamaized.net/images/site/champion/blet.png" alt="" />
                  </li>
                </>
              ))}
            </ul>
          </td>
          <td className="pick-rate">
            <strong>28.18%</strong>
            <span>1,528</span>
          </td>
          <td className="win-rate">
            <strong>65.77%</strong>
          </td>
          <td></td>
        </tr>
        {coreDataOverview.map((data, i) => (
          <tr key={i}>
            <td>
              <ul>
                {['first', 'second', 'third'].map((url, i) => (
                  <>
                    <li key={i + 'list'}>
                      <img
                        src={`//opgg-static.akamaized.net/images/lol/item/${data[url]}.png?image=q_auto:best&v=1617159801`}
                        alt=""
                      />
                    </li>
                    <li className="arrow" key={i + 'arrow'}>
                      <img src="//opgg-static.akamaized.net/images/site/champion/blet.png" alt="" />
                    </li>
                  </>
                ))}
              </ul>
            </td>
            <td className="pick-rate">
              <strong>{data.pickRate}%</strong>
              <span>{data.pickCount}</span>
            </td>
            <td className="win-rate">
              <strong>{data.winRate}%</strong>
            </td>
            <td></td>
          </tr>
        ))}
        <tr>
          <th rowSpan={3}>신발</th>
          <td>
            <ul>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/3047.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
            </ul>
          </td>
          <td className="pick-rate">
            <strong>66.32%</strong>
            <span>9,621</span>
          </td>
          <td className="win-rate">
            <strong>51.73%</strong>
          </td>
          <td></td>
        </tr>
        {bootsDataOverview.map((data, i) => (
          <tr key={i}>
            <td>
              <ul>
                <li key={i + 'list'}>
                  <img
                    src={`//opgg-static.akamaized.net/images/lol/item/${data.url}.png?image=q_auto:best&v=1617159801`}
                    alt=""
                  />
                </li>
              </ul>
            </td>
            <td className="pick-rate">
              <strong>{data.pickRate}%</strong>
              <span>{data.pickCount}</span>
            </td>
            <td className="win-rate">
              <strong>{data.winRate}%</strong>
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default ItemTable;
