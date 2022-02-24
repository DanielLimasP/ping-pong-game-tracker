import { environment } from "../../environment/environment";
import express, { Application } from "express";
import cors from "cors";
import colors from "colors";

// routes

import scoreRoutes from "../routes/score.routes";
import docsRoutes from "../routes/docs.routes";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors({}));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(`/api/score`, scoreRoutes);
    this.app.use(`/api/docs`, docsRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      if (environment.TEST) {
        console.log(colors.bgCyan.black(`\nTESTING environment enabled ✔️`));
      } else {
        console.log(colors.bgCyan.black(`\nTESTING environment disabled ❌`));
      }
      console.log(colors.bgCyan.black(`App listening on port ${this.port}\n`));
    });
  }
}

export default Server;
