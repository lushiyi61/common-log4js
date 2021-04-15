"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4js_1 = require("log4js");
var logId = process.env.NODE_APP_INSTANCE ? process.env.NODE_APP_INSTANCE : "0";
var logEnv = process.env.NODE_ENV ? process.env.NODE_ENV : "NULL";
var log4js = log4js_1.configure({
    pm2: true,
    disableClustering: true,
    appenders: {
        out: {
            type: "stdout"
        },
        server: {
            type: "dateFile",
            filename: "logs/" + logEnv + "/" + logId,
            pattern: "yyyy-MM-dd.log",
            category: "default",
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: [
                "server",
                "out"
            ],
            level: "DEBUG"
        }
    }
});
exports.default = log4js;
