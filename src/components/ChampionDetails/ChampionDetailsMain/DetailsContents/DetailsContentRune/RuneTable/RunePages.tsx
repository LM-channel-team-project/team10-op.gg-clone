import { KeystoneRow, RuneRow, FragmentRow } from './RuneTableRow';

interface PropsType {
  activeState: number;
  runes: {
    mainRune: string;
    keystones: string[];
    mainFirstLine: string[];
    mainSecondLine: string[];
    mainThirdLine: string[];
    subRune: string;
    subFirstLine: string[];
    subSecondLine: string[];
    subThirdLine: string[];
    fragmentFirstLine: string[];
    fragmentSecondLine: string[];
    fragmentThirdLine: string[];
    pickRate: number;
    pickCount: number;
    winRate: number;
  }[];
}

export const RunePage1 = ({ runes, activeState }: PropsType) => {
  return (
    <>
      {runes.map((runeRow, i) => (
        <tr key={'RunePage' + i} className={activeState !== 1 ? 'hide' : ''}>
          <td className="cell-data">
            <div className="summary-rune">
              <div className="rune-box-wrap">
                <div className="rune-page">
                  <div className="rune-page-row">
                    <div className="rune-item">
                      <img
                        src={runeRow.mainRune}
                        className="rune-image selected"
                        style={{ backgroundColor: '#ededed' }}
                      />
                    </div>
                  </div>
                  <KeystoneRow line={runeRow.keystones} />
                  <RuneRow line={runeRow.mainFirstLine} />
                  <RuneRow line={runeRow.mainSecondLine} />
                  <RuneRow line={runeRow.mainThirdLine} />
                </div>
                <div className="page-divider"></div>
                <div className="rune-page">
                  <div className="rune-page-row">
                    <div className="rune-item">
                      <img
                        src={runeRow.subRune}
                        className="rune-image selected"
                        style={{ backgroundColor: '#ededed' }}
                      />
                    </div>
                  </div>
                  <RuneRow line={runeRow.subFirstLine} />
                  <RuneRow line={runeRow.subSecondLine} />
                  <RuneRow line={runeRow.subThirdLine} />
                </div>
                <div className="page-divider"></div>
                <div className="fragment-page">
                  <div className="fragment-detail">
                    <FragmentRow line={runeRow.fragmentFirstLine} />
                    <FragmentRow line={runeRow.fragmentSecondLine} />
                    <FragmentRow line={runeRow.fragmentThirdLine} />
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="pick-rate item-value">
            {runeRow.pickRate}%<em>{runeRow.pickCount}</em>
          </td>
          <td className="win-rate item-value">{runeRow.winRate}%</td>
        </tr>
      ))}
    </>
  );
};

export const RunePage2 = ({ runes, activeState }: PropsType) => {
  return (
    <>
      {runes.map((runeRow, i) => (
        <tr key={'RunePage' + i} className={activeState !== 2 ? 'hide' : ''}>
          <td className="cell-data">
            <div className="summary-rune">
              <div className="rune-box-wrap">
                <div className="rune-page">
                  <div className="rune-page-row">
                    <div className="rune-item">
                      <img
                        src={runeRow.mainRune}
                        className="rune-image selected"
                        style={{ backgroundColor: '#ededed' }}
                      />
                    </div>
                  </div>
                  <KeystoneRow line={runeRow.keystones} />
                  <RuneRow line={runeRow.mainFirstLine} />
                  <RuneRow line={runeRow.mainSecondLine} />
                  <RuneRow line={runeRow.mainThirdLine} />
                </div>
                <div className="page-divider"></div>
                <div className="rune-page">
                  <div className="rune-page-row">
                    <div className="rune-item">
                      <img
                        src={runeRow.subRune}
                        className="rune-image selected"
                        style={{ backgroundColor: '#ededed' }}
                      />
                    </div>
                  </div>
                  <RuneRow line={runeRow.subFirstLine} />
                  <RuneRow line={runeRow.subSecondLine} />
                  <RuneRow line={runeRow.subThirdLine} />
                </div>
                <div className="page-divider"></div>
                <div className="fragment-page">
                  <div className="fragment-detail">
                    <FragmentRow line={runeRow.fragmentFirstLine} />
                    <FragmentRow line={runeRow.fragmentSecondLine} />
                    <FragmentRow line={runeRow.fragmentThirdLine} />
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="pick-rate item-value">
            {runeRow.pickRate}%<em>{runeRow.pickCount}</em>
          </td>
          <td className="win-rate item-value">{runeRow.winRate}%</td>
        </tr>
      ))}
    </>
  );
};
