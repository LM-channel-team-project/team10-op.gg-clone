import { ChampionRuneTable } from './styles';
import { runes1, runes2 } from '@/components/ChampionDetails/championDetailsInfo';

interface PropsType {
  activeState: number;
}

function RuneTable({ activeState }: PropsType) {
  return (
    <ChampionRuneTable>
      <thead>
        <tr>
          <th className="title">룬</th>
          <th className="sort">픽률</th>
          <th className="sort">승률</th>
        </tr>
      </thead>
      <tbody className="rune-tbody">
        {runes1.map((runeRow, i) => (
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
                    <div className="rune-page-row">
                      {runeRow.keystones.map((keystone, i) => (
                        <div key={'keystone' + i} className="rune-item">
                          <img
                            src={keystone}
                            alt="키스톤"
                            className={
                              keystone.includes('image=c_scale')
                                ? 'rune-image'
                                : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainFirstLine.map((item, i) => (
                        <div key={'firstLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainSecondLine.map((item, i) => (
                        <div key={'secondLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="두번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainThirdLine.map((item, i) => (
                        <div key={'thirdLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
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
                    <div className="rune-page-row">
                      {runeRow.subFirstLine.map((item, i) => (
                        <div key={'subFirstLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.subSecondLine.map((item, i) => (
                        <div key={'subSecondLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="두번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.subThirdLine.map((item, i) => (
                        <div key={'subThirdLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="page-divider"></div>
                  <div className="fragment-page">
                    <div className="fragment-detail">
                      <div className="fragment-row">
                        {runeRow.fragmentFirstLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="fragment-row">
                        {runeRow.fragmentSecondLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="fragment-row">
                        {runeRow.fragmentThirdLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
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
        {runes2.map((runeRow, i) => (
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
                    <div className="rune-page-row">
                      {runeRow.keystones.map((keystone, i) => (
                        <div key={'keystone' + i} className="rune-item">
                          <img
                            src={keystone}
                            alt="키스톤"
                            className={
                              keystone.includes('image=c_scale')
                                ? 'rune-image'
                                : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainFirstLine.map((item, i) => (
                        <div key={'firstLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainSecondLine.map((item, i) => (
                        <div key={'secondLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="두번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.mainThirdLine.map((item, i) => (
                        <div key={'thirdLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
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
                    <div className="rune-page-row">
                      {runeRow.subFirstLine.map((item, i) => (
                        <div key={'subFirstLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.subSecondLine.map((item, i) => (
                        <div key={'subSecondLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="두번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="rune-page-row">
                      {runeRow.subThirdLine.map((item, i) => (
                        <div key={'subThirdLine' + i} className="rune-item">
                          <img
                            src={item}
                            alt="첫번째줄"
                            className={
                              item.includes('image=c_scale') ? 'rune-image' : 'rune-image selected'
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="page-divider"></div>
                  <div className="fragment-page">
                    <div className="fragment-detail">
                      <div className="fragment-row">
                        {runeRow.fragmentFirstLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="fragment-row">
                        {runeRow.fragmentSecondLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="fragment-row">
                        {runeRow.fragmentThirdLine.map((item, i) => (
                          <div key={'fragFirstLine' + i} className="fragment">
                            <img
                              src={item}
                              className={
                                item.includes('image=c_scale')
                                  ? 'fragment-image opacity'
                                  : 'fragment-image'
                              }
                              alt="스탯"
                            />
                          </div>
                        ))}
                      </div>
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
      </tbody>
    </ChampionRuneTable>
  );
}

export default RuneTable;
