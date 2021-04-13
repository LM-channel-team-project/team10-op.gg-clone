import ChampionSkillBuildTable from './ChampionSkillBuildTable/ChampionSkillBuildTable';

interface TableProps {
  skills: string[];
  levels: number[];
  build: string[];
}

function SpellAndSkillTable({ skills, levels, build }: TableProps) {
  return (
    <>
      <thead>
        <tr>
          <th>
            <a href="">
              <h2>추천 소환사 주문</h2>
            </a>
          </th>
          <th>
            <span>픽률</span>
          </th>
          <th>
            <span>승률</span>
          </th>
          <th></th>
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
                  src="//opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png?image=c_scale,q_auto,w_42&v=1617159801"
                  alt=""
                />
              </li>
            </ul>
          </td>
          <td className="pick-rate">
            <strong>99.55%</strong>
            <span>29,187</span>
          </td>
          <td className="win-rate">
            <strong>49.39%</strong>
          </td>
          <td></td>
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
                  src="//opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=c_scale,q_auto,w_42&v=1617159801"
                  alt=""
                />
              </li>
            </ul>
          </td>
          <td className="pick-rate">
            <strong>0.34%</strong>
            <span>101</span>
          </td>
          <td className="win-rate">
            <strong>49.5%</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
      <thead>
        <th>
          <a href="#">
            <h2>추천 스킬 빌드</h2>
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
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {skills.map((skill, i) => (
                <>
                  <li key={i}>
                    <img src={skill} alt="skill" />
                  </li>
                  <li key={i + 'arrow'} className="arrow">
                    <img src="//opgg-static.akamaized.net/images/site/champion/blet.png" alt="" />
                  </li>
                </>
              ))}
            </ul>
            <ChampionSkillBuildTable build={build} levels={levels} />
          </td>
          <td className="pick-rate">
            <strong>49.5%</strong>
            <span>6,414</span>
          </td>
          <td className="win-rate">
            <strong>61.69%</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </>
  );
}

export default SpellAndSkillTable;
