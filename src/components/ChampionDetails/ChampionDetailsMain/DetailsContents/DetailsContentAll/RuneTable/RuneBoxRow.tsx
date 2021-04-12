import { precisionRune } from '@/components/ChampionDetails/championDetailsInfo';

function RuneBoxRow() {
  return (
    <>
      <div className="rune-box-row">
        <div className="rune-box-mark">
          <img
            className="rune-image"
            src="//opgg-static.akamaized.net/images/lol/perkStyle/8000.png?image=q_auto:best&v=1617159801"
            alt=""
          />
        </div>
      </div>
      <div className="rune-box-row">
        {precisionRune[0].map((item, i) => (
          <div key={i} className="rune-box-item rune-box-keystone">
            <div className="rune-image">
              <img
                src={`//opgg-static.akamaized.net/images/lol/perk/${item}.png?image=c_scale,q_auto,e_grayscale&v=1`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rune-box-row">
        {precisionRune[1].map((item, i) => (
          <div key={i} className="rune-box-item ">
            <div className="rune-image">
              <img
                src={`//opgg-static.akamaized.net/images/lol/perk/${item}.png?image=c_scale,q_auto,e_grayscale&v=1`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rune-box-row">
        {precisionRune[2].map((item, i) => (
          <div key={i} className="rune-box-item ">
            <div className="rune-image">
              <img
                src={`//opgg-static.akamaized.net/images/lol/perk/${item}.png?image=c_scale,q_auto,e_grayscale&v=1`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rune-box-row">
        {precisionRune[3].map((item, i) => (
          <div key={i} className="rune-box-item ">
            <div className="rune-image">
              <img
                src={`//opgg-static.akamaized.net/images/lol/perk/${item}.png?image=c_scale,q_auto,e_grayscale&v=1`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RuneBoxRow;
