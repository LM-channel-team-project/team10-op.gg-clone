import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { SummonerRank } from '@/types/summoner';
import { ChampionMeta, ChampionPositionMap } from '@/lib/static/championsMeta';
import S from './style';
type SearchChampionMeta = ChampionMeta & {
  keyword: string;
};
interface SearchAutoCompleteItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  item: SummonerRank | SearchChampionMeta;
  refFn: (r: HTMLLIElement) => void;
  isFocused: boolean;
}

function SearchAutoCompleteItem({ item, refFn, isFocused }: SearchAutoCompleteItemProps) {
  const router = useRouter();
  const refinedItem = useMemo(() => refineItem(item), [item]);
  const type = useMemo(() => (isSummoner(item) ? 'summoners' : 'champions'), [item]);

  const onPushOPGG = () => {
    const isPush = confirm('소환사 상세 검색 미구현\nOP.GG 사이트에서 검색합니다.');
    isPush && router.push(`https://www.op.gg/summoner/userName=${refinedItem.name}`);
  };

  return (
    <S.AutoCompleteItem
      type={type}
      data-value={refinedItem.name.replace(/ /gi, '')}
      ref={refFn}
      isFocused={isFocused}
    >
      <Link href="">
        {/* <Link href={`/${type}/${refinedItem.href}`}> */}
        <a className="autocomplete-anchor" onClick={onPushOPGG}>
          <Image
            loader={imageLoader}
            src={refinedItem.imagePath}
            alt={`${item.name} profile icon`}
            width="36"
            height="36"
            layout="fixed"
            className="autocomplete-icon"
          />
          <div className="autocomplete-contents">
            <span className="autocomplete-name">{refinedItem.name}</span>
            <div className="autocomplete-info">{refinedItem.info}</div>
          </div>
        </a>
      </Link>
    </S.AutoCompleteItem>
  );
}

function imageLoader({ src }: { src: string }) {
  return `https://ddragon.leagueoflegends.com/cdn/11.8.1/img${src}`;
}
function refineItem(item: SummonerRank | SearchChampionMeta) {
  return {
    name: item.name,
    imagePath: isSummoner(item)
      ? `/profileicon/${item.profileIconId}.png`
      : `/champion/${item.keyword}.png`,
    info: isSummoner(item)
      ? getSummonerInfo(item)
      : item.positions.map((position) => ChampionPositionMap[position]).join(', '),
    href: isSummoner(item) ? item.name : item.keyword,
  };
}
function isSummoner(item: SummonerRank | SearchChampionMeta): item is SummonerRank {
  return (item as SummonerRank).id ? true : false;
}
function getSummonerInfo(summoner: SummonerRank) {
  const romanToNumber = { I: 1, II: 2, III: 3, IV: 4, V: 5 };
  return summoner.tier && summoner.rank ? (
    <span>
      {summoner.tier.replace(/\B\w/g, (char: string) => char.toLowerCase())}&nbsp;
      {romanToNumber[summoner.rank]} - {summoner.leaguePoints}LP
    </span>
  ) : (
    <span>{`Level ${summoner.summonerLevel}`}</span>
  );
}

export default React.memo(SearchAutoCompleteItem);
