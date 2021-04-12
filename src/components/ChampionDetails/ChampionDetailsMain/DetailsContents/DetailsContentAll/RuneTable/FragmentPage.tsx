import { Fragment, FragmentBox, FragmentRow } from './styles';
import { fragments } from '@/components/ChampionDetails/championDetailsInfo';

function FragmentPage() {
  return (
    <FragmentBox>
      <div className="fragment-detail">
        {fragments.map((url, i) => (
          <FragmentRow key={i}>
            {fragments[i].map((item, i) => (
              <Fragment key={'fragment' + i}>
                <div>
                  <img
                    src={`//opgg-static.akamaized.net/images/lol/perkShard/${item}.png?image=c_scale,q_auto,e_grayscale&v=1`}
                    alt=""
                  />
                </div>
              </Fragment>
            ))}
          </FragmentRow>
        ))}
      </div>
    </FragmentBox>
  );
}

export default FragmentPage;
