import log4js from "./log4ts";
import { basename } from "path";
const logger = log4js.getLogger(basename(__filename));
///////////////////////////////////////////////////////


logger.info("==========================程  序  启  动==========================");
logger.debug("==========================程  序  启  动==========================");