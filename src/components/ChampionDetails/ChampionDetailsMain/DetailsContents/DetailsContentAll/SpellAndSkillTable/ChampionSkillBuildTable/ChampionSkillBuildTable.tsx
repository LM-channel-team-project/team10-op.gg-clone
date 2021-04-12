import React from 'react';
import { Table } from './styles';

interface TableProps {
  levels: number[];
  build: string[];
}

function ChampionSkillBuildTable({ build, levels }: TableProps) {
  return (
    <Table>
      <tbody>
        <tr>
          {levels.map((level) => (
            <th key={level}>{level}</th>
          ))}
        </tr>
        <tr>
          {build.map((skill, i) => (
            <td key={i}>{skill}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ChampionSkillBuildTable;
