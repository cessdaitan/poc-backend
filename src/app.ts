import API from "./api";
import config from "./config";
import { createDBConnection } from "./infra/database";

createDBConnection().then(() => {
  const app = new API().app;
  app.listen(config.environment.port, () => {
    console.log(`Listening on port ${config.environment.port}`);
  });
}).catch(error => {
  console.log(`Error connecting to database: ${error}`);
});
