import { ProcessorFactory } from './processors/ProcessorFactory';

async function main() {
  const path = process.argv[2];
  console.log('File Path:', path);

  if (!path) {
    console.error('Please provide a file path or URL.');
    process.exit(1);
  }

  try {
    const processor = ProcessorFactory.createProcessor(path);
    const content = await processor.readFile(path);
    const stats = processor.processFile(content);
    console.log('File Statistics:');
    console.log(`Total Words: ${stats.words}`);
    console.log(`Total Letters: ${stats.letters}`);
    console.log(`Total Spaces: ${stats.spaces}`);
    console.log('Frequent Words:', stats.frequentWords);
  } catch (error) {
    console.error('Error reading file:', error);
    process.exit(1);
  }
}

main();
