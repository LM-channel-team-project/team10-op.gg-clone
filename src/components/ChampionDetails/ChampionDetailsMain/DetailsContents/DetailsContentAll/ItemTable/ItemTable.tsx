import React from 'react';

function ItemTable() {
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
                  src="//opgg-static.akamaized.net/images/lol/item/1054.png?image=q_auto:best&v=1617159801"
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
                  src="//opgg-static.akamaized.net/images/lol/item/1054.png?image=q_auto:best&v=1617159801"
                  alt=""
                />
              </li>
              <li className="arrow"></li>
              <li>
                <img
                  src="//opgg-static.akamaized.net/images/lol/item/1054.png?image=q_auto:best&v=1617159801"
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
          <th rowSpan={5}>추천 빌드</th>
          <td>
            <ul>
              {[1, 2, 3].map((item, i) => (
                <>
                  <li key={i}>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/item/6631.png?image=q_auto:best&v=1617159801"
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
        {[1, 2, 3, 4].map((tr, i) => (
          <tr key={i}>
            <td>
              <ul>
                {[1, 2, 3].map((item, i) => (
                  <>
                    <li key={i + 'list'}>
                      <img
                        src="//opgg-static.akamaized.net/images/lol/item/6631.png?image=q_auto:best&v=1617159801"
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
        {[1, 2].map((tr, i) => (
          <tr key={i}>
            <td>
              <ul>
                <li key={i + 'list'}>
                  <img
                    src="//opgg-static.akamaized.net/images/lol/item/3111.png?image=q_auto:best&v=1617159801"
                    alt=""
                  />
                </li>
              </ul>
            </td>
            <td className="pick-rate">
              <strong>31.28%</strong>
              <span>4,538</span>
            </td>
            <td className="win-rate">
              <strong>54.53%</strong>
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default ItemTable;
