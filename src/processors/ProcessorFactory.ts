import { Processor } from './Processor';
import { LocalFileProcessor } from './LocalFileProcessor';
import { RemoteFileProcessor } from './RemoteFileProcessor';

export class ProcessorFactory {
    static createProcessor(path: string): Processor {
        const isRemote = path.startsWith('http://') || path.startsWith('https://');
        const processor = isRemote ? new RemoteFileProcessor() : new LocalFileProcessor();
        processor.setThreshold(10);
        return processor;
    }
}
