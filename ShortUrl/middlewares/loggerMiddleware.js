import fs from "fs";

async function loggerMiddlerware(req, res, next) {
  fs.appendFile(
    "logs.txt",
    `${Date.now()} ${req.ip} ${req.method} ${req.path}\n`,
    (err, data) => {
      if (err) {
        console.error(`Error writing to logs.txt: ${err}`);
        return next(err);
      }
      next();
    }
  );
}

export { loggerMiddlerware };
