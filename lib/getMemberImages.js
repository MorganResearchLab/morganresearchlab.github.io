import fs from 'fs';
import path from 'path';

export function getMemberImages() {
  const directoryPath = path.join(process.cwd(), 'public/img/member');
  const filenames = fs.readdirSync(directoryPath);
  return filenames.map((filename) => `/img/member/${filename}`);
}