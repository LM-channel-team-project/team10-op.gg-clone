import React, { useReducer, createContext, useContext, Dispatch } from 'react';

import { RegionType, GarenaType, LanguageType } from '@/types/regionLanguage';

type RegionOrGarena = RegionType | GarenaType;

export interface RegionLangState {
  region: RegionOrGarena;
  lang: LanguageType;
}

type Action =
  | { type: 'SET_REGION'; region: RegionOrGarena }
  | { type: 'SET_LANG'; lang: LanguageType }
  | { type: 'SET_ALL'; payload: { region: RegionOrGarena; lang: LanguageType } };

export type RegionLangDispatch = Dispatch<Action>;

function reducer(state: RegionLangState, action: Action): RegionLangState {
  switch (action.type) {
    case 'SET_REGION':
      return {
        ...state,
        region: action.region,
      };
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang,
      };
    case 'SET_ALL':
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
}

const initialState: RegionLangState = {
  region: 'Korea',
  lang: 'ko_KR',
};

const RegionLangStateContext = createContext<RegionLangState | null>(null);
const RegionLangDispatchContext = createContext<RegionLangDispatch | null>(null);

export default function RegionLangProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RegionLangStateContext.Provider value={state}>
      <RegionLangDispatchContext.Provider value={dispatch}>
        {children}
      </RegionLangDispatchContext.Provider>
    </RegionLangStateContext.Provider>
  );
}

export function useRegionLangState() {
  const state = useContext(RegionLangStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useRegionLangDispatch() {
  const dispatch = useContext(RegionLangDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
