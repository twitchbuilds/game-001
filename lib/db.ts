// Tiny persistent store for the backend: one JSON file per collection in ~/data.
// The data folder lives outside the app, so it survives rebuilds and is never committed.
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const DIR = process.env.DATA_DIR ?? join(homedir(), "data");

export async function load<T>(name: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await readFile(join(DIR, `${name}.json`), "utf8")) as T;
  } catch {
    return fallback;
  }
}

export async function save<T>(name: string, value: T): Promise<void> {
  await mkdir(DIR, { recursive: true });
  const tmp = join(DIR, `.${name}.${process.pid}.tmp`);
  await writeFile(tmp, JSON.stringify(value));
  await rename(tmp, join(DIR, `${name}.json`));
}
