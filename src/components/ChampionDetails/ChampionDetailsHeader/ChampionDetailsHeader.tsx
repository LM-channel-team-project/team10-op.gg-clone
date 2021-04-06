import {
  DetailsHeaderContainer,
  DetailsHeaderPosition,
  DetailsHeaderMain,
  DetailsHeaderInfo,
  InfoChampionImage,
  InfoChampionName,
  InfoChampionTier,
  InfoChampionSkills,
  DetailsHeaderMatchup,
  TabItems,
  TabItemsChampionInfo,
  TabItemsWinRate,
  TabItemsCounter,
} from './styles';
import React from 'react';

function ChampionDetailsHeader() {
  return (
    <div>
      <DetailsHeaderContainer>
        <DetailsHeaderPosition>
          <ul>
            <li>
              <a>탑</a>
            </li>
            <li>
              <a>미드</a>
            </li>
          </ul>
        </DetailsHeaderPosition>
        <DetailsHeaderMain>
          <DetailsHeaderInfo>
            <InfoChampionImage>
              <div></div>
            </InfoChampionImage>
            <InfoChampionName>가렌</InfoChampionName>
            <InfoChampionTier>
              챔피언 티어: <b>3티어</b>
            </InfoChampionTier>
            <InfoChampionSkills>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </InfoChampionSkills>
          </DetailsHeaderInfo>
          <DetailsHeaderMatchup>
            <ul>
              <li>
                <a href="">카운터 챔피언</a>
              </li>
              <li>
                <a href="">상대하기 쉬운 챔피언</a>
              </li>
            </ul>

            <TabItems>
              <tbody>
                <tr>
                  <TabItemsChampionInfo>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/champion/Zac.png?image=c_scale,q_auto,w_34&v=1617159801"
                      alt=""
                    />
                    자크
                  </TabItemsChampionInfo>
                  <TabItemsWinRate>
                    승률 <b>42.04%</b>
                  </TabItemsWinRate>
                  <TabItemsCounter>카운터</TabItemsCounter>
                </tr>
                <tr>
                  <TabItemsChampionInfo>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/champion/Zac.png?image=c_scale,q_auto,w_34&v=1617159801"
                      alt=""
                    />
                    자크
                  </TabItemsChampionInfo>
                  <TabItemsWinRate>
                    승률 <b>42.04%</b>
                  </TabItemsWinRate>
                  <TabItemsCounter>카운터</TabItemsCounter>
                </tr>
                <tr>
                  <TabItemsChampionInfo>
                    <img
                      src="//opgg-static.akamaized.net/images/lol/champion/Zac.png?image=c_scale,q_auto,w_34&v=1617159801"
                      alt=""
                    />
                    자크
                  </TabItemsChampionInfo>
                  <TabItemsWinRate>
                    승률 <b>42.04%</b>
                  </TabItemsWinRate>
                  <TabItemsCounter>카운터</TabItemsCounter>
                </tr>
              </tbody>
            </TabItems>
          </DetailsHeaderMatchup>
        </DetailsHeaderMain>
      </DetailsHeaderContainer>
    </div>
  );
}

export default ChampionDetailsHeader;
