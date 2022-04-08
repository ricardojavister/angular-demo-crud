import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  apiEndpoint: "http://localhost/digiapi",
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR,
};
