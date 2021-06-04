// importando winston
import winston, { format } from 'winston';
import appRoot from 'app-root-path';

// Componentes para crear el formato personalizado
const { combine, timestamp, printf, colorize, json, uncolorize } = format;
// creando el prefil de color para el log
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'green',
};
// Agregando perfil a winston
winston.addColors(colors);
// formato de consola
const myFormat = combine(
  colorize({ all: true }),
  timestamp(),
  printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);
// formato para la salida los archivos log
const myFileFormat = combine(uncolorize(), timestamp(), json());
// creando objetos de configuracion
const options = {
  infoFile: {
    level: 'info',
    filename: `${appRoot}/server/logs/infos.log`,
    handleExceptions: true,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warns.log`,
    handleExceptions: true,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${appRoot}/server/logs/errors.log`,
    handleExceptions: true,
    maxSize: 5242880,
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myFormat,
  },
};

// creando la instancia del logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

// Manejo de un stream de entrada
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
