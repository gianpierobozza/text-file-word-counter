import axios from 'axios';
import { Processor } from './Processor';

export class RemoteFileProcessor extends Processor {
  async readFile(path: string): Promise<string> {
    const response = await axios.get(path);
    return response.data;
  }
}
