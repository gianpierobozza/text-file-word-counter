import fs from 'fs/promises';
import { Processor } from './Processor';

export class LocalFileProcessor extends Processor {
  async readFile(path: string): Promise<string> {
    return fs.readFile(path, 'utf-8');
  }
}
