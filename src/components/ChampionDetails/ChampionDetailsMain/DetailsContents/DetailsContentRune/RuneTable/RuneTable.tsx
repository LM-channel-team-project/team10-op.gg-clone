import { ChampionRuneTable } from './styles';
import { runes1, runes2 } from '@/components/ChampionDetails/championDetailsInfo';
import { RunePage1, RunePage2 } from './RunePages';

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
        <RunePage1 activeState={activeState} runes={runes1} />
        <RunePage2 activeState={activeState} runes={runes2} />
      </tbody>
    </ChampionRuneTable>
  );
}

export default RuneTable;
