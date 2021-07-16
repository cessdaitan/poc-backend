export default interface IConfig {
  environment: {
    stage: string;
    port: number;
    // apiKey: string;
  };
  database: {
    password: string;
    database: string;
    username: string;
    port: number;
    host: string;
  };
};
