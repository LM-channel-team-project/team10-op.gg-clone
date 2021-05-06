import RuneBoxRow from './RuneBoxRow';
import FragmentPage from './FragmentPage';
import { Divider, RuneRatio, RuneTableHeader, RuneTableMain } from './styles';

function RuneTable() {
  return (
    <>
      <thead>
        <tr>
          <th colSpan={3}>
            <a href="#">
              <h2>룬</h2>
            </a>
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
          <td className="rune-tab" colSpan={4}>
            <RuneTableHeader>
              <div className="tab active">
                <a href="#">
                  <div className="rune-image">
                    <img
                      src="//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=c_scale,q_auto,w_26&v=1617159801"
                      alt=""
                    />
                    <img
                      className="keystone"
                      src="//opgg-static.akamaized.net/images/lol/perk/8010.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                    <img
                      className="sub-rune"
                      src="//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=c_scale,q_auto,w_32&v=1617159801"
                      alt=""
                    />
                  </div>
                  <div className="rune-name">정밀 + 마법</div>
                  <div className="rune-rate">
                    <span>픽률</span>
                    <strong>60.31%</strong>
                    <span>승률</span>
                    <span>51.84%</span>
                  </div>
                </a>
              </div>
              <div className="tab">
                <a href="#">
                  <div className="rune-image">
                    <img
                      src="//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=c_scale,q_auto,w_26&v=1617159801"
                      alt=""
                    />
                    <img
                      className="keystone"
                      src="//opgg-static.akamaized.net/images/lol/perk/8010.png?image=c_scale,q_auto,w_42&v=1617159801"
                      alt=""
                    />
                    <img
                      className="sub-rune"
                      src="//opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=c_scale,q_auto,w_32&v=1617159801"
                      alt=""
                    />
                  </div>
                  <div className="rune-name">정밀 + 마법</div>
                  <div className="rune-rate">
                    <span>픽률</span>
                    <strong>60.31%</strong>
                    <span>승률</span>
                    <span>51.84%</span>
                  </div>
                </a>
              </div>
            </RuneTableHeader>
          </td>
        </tr>
      </tbody>
      <RuneTableMain>
        <tr>
          <td>
            <div className="rune-box-wrap">
              <div className="rune-box">
                <RuneBoxRow />
              </div>
              <Divider />
              <div className="rune-box">
                <RuneBoxRow />
              </div>
              <Divider />
              <FragmentPage />
            </div>
          </td>
          <RuneRatio>
            <span>픽률</span>
            <strong>27.47%</strong>
            <span>5,195</span>
            <span className="win-rate">승률</span>
            <strong>51.01%</strong>
          </RuneRatio>
        </tr>
        <tr>
          <td>
            <div className="rune-box-wrap">
              <div className="rune-box">
                <RuneBoxRow />
              </div>
              <Divider />
              <div className="rune-box">
                <RuneBoxRow />
              </div>
              <Divider />
              <FragmentPage />
            </div>
          </td>
          <RuneRatio>
            <span>픽률</span>
            <strong>8.04%</strong>
            <span>1,521</span>
            <span className="win-rate">승률</span>
            <strong>52.04%</strong>
          </RuneRatio>
        </tr>
      </RuneTableMain>
    </>
  );
}

export default RuneTable;
