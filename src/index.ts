import { readFile, readFileSync } from 'fs';

/**
 * Reads a file as text
 *
 * @export
 * @param {string} path The path to the file to read
 * @return {string} The file contents as text
 */
export function readFileAsTextSync(path: string): string {
  return readFileSync(path, {
    encoding: 'utf-8',
  });
}

/**
 * Reads file as text asynchronously
 *
 * @export
 * @param {string} path The path to the file to read
 * @return {Promise<string>} The file contents
 */
export function readFileAsText(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(
      path,
      {
        encoding: 'utf-8',
      },
      (err, text) => {
        if (err) {
          reject(err);
        } else {
          resolve(text);
        }
      },
    );
  });
}

/**
 * Reads the file as JSON content
 *
 * @export
 * @template T The JSON structure after parsing
 * @param {string} path The path to the file to read
 * @return {T} The parsed JSON
 */
export function readFileAsJSONSync<T>(path: string): T {
  return JSON.parse(readFileAsTextSync(path));
}

/**
 * Reads the file as JSON content asynchronously
 *
 * @export
 * @template T The JSON structure after parsing
 * @param {string} path The path to the file to read
 * @return {Promise<T>} Promise that will resolve to the parsed JSON
 */
export async function readFileAsJSON<T>(path: string): Promise<T> {
  return JSON.parse(await readFileAsText(path));
}
