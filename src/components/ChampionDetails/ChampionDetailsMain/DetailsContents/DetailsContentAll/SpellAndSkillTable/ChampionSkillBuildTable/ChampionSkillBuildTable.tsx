import React from 'react';
import { Table } from './styles';

interface TableProps {
  build: string[];
}

function ChampionSkillBuildTable({ build }: TableProps) {
  return (
    <Table>
      <tbody>
        <tr>
          {build.map((level, i) => (
            <th key={'level' + i}>{i + 1}</th>
          ))}
        </tr>
        <tr>
          {build.map((skill, i) => (
            <td key={'skill' + i}>{skill}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ChampionSkillBuildTable;
