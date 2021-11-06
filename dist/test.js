"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4ts_1 = require("./log4ts");
var path_1 = require("path");
var logger = log4ts_1.default.getLogger((0, path_1.basename)(__filename));
///////////////////////////////////////////////////////
logger.info("==========================程  序  启  动==========================");
logger.debug("==========================程  序  启  动==========================");
