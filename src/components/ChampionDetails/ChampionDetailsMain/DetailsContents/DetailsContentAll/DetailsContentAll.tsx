import React from 'react';
import { Container, DetailsContentAllMain, DetailsContentAllSide, AllTable } from './styles';

function DetailsContentAll() {
  return (
    <Container>
      <DetailsContentAllMain>
        <AllTable>
          <thead>
            <tr>
              <th>
                <a href="">
                  <h2>추천 소환사 주문</h2>
                </a>
              </th>
              <th>승률</th>
              <th>픽률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                  </li>
                  <li className="arrow"></li>
                  <li>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                  </li>
                  <li className="arrow"></li>
                  <li>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </AllTable>
      </DetailsContentAllMain>
      <DetailsContentAllSide>사이드</DetailsContentAllSide>
    </Container>
  );
}

export default DetailsContentAll;
