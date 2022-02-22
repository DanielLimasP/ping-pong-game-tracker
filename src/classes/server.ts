import { environment } from "../../environment/environment";
import express, { Application } from "express";
import colors from "colors";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.db();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  routes() {
    return;
  }

  async db() {
    // TODO: Add db conn
  }

  listen() {
    this.app.listen(this.port, () => {
      if (environment.TEST) {
        console.log(colors.bgCyan.black(`\nTESTING environment enabled ✔️`));
      } else {
        console.log(colors.bgCyan.black(`\nTESTING environment disabled ❌`));
      }
      console.log(colors.bgCyan.black(`App listening on port ${this.port}`));
    });
  }
}

export default Server;
