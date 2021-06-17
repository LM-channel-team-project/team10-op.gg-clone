declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_DDRAGON_URL: string;
    API_ENDPOINT: string;
    RIOT_GAMES_API_KEY: string;
  }
}
