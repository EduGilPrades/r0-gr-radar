"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var App_1 = require("./App");
dotenv_1.default.config();
var app = new App_1.App();
app.start();
//# sourceMappingURL=index.js.map