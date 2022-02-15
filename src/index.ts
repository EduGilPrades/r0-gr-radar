import dotenv from "dotenv";
import { App } from "./App";

dotenv.config();

const app: App = new App();

app.start();
