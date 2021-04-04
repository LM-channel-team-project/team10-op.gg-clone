declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    API_ENDPOINT: string;
    RIOT_GAMES_API_KEY: string;
  }
}
