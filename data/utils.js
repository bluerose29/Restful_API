"use strict";
import { readdir, readFileSync } from "fs-extra";
import { join } from "path";

const loadSqlQueries = async (folderName) => {
  const filePath = join(process.cwd(), "data", folderName);
  const files = await readdir(filePath);
  const sqlFiles = files.filter((f) => f.endsWith(".sql"));
  const queries = {};
  for (const sqlfile of sqlFiles) {
    const query = readFileSync(join(filePath, sqlfile), { encoding: "UTF-8" });
    queries[sqlfile.replace(".sql", "")] = query;
  }
  return queries;
};

export default {
  loadSqlQueries,
};
