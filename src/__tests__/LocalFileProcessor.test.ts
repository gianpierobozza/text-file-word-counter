import { LocalFileProcessor } from '../processors/LocalFileProcessor';
import fs from 'fs/promises';

jest.mock('fs/promises');

describe('LocalFileProcessor', () => {
    const processor = new LocalFileProcessor();

    test('should read local file', async () => {
        const mockContent = 'hello world';
        (fs.readFile as jest.Mock).mockResolvedValue(mockContent);
        const content = await processor.readFile('/path/to/file.txt');
        expect(content).toBe(mockContent);
    });

    test('should throw an error if file does not exist', async () => {
        const mockError = new Error('File not found');
        (fs.readFile as jest.Mock).mockRejectedValue(mockError);
        await expect(processor.readFile('/path/to/missing-file.txt')).rejects.toThrow(mockError);
    });

    test('should count words correctly', () => {
        const content = 'hello world hello';
        const stats = processor.processFile(content);
        expect(stats.words).toBe(3);
    });

    test('should count letters correctly', () => {
        const content = 'hello world';
        const stats = processor.processFile(content);
        expect(stats.letters).toBe(10);
    });

    test('should count spaces correctly', () => {
        const content = 'hello world';
        const stats = processor.processFile(content);
        expect(stats.spaces).toBe(1);
    });

    test('should return empty frequent words if below the threshold', () => {
        const content = 'hello hello world';
        const stats = processor.processFile(content);
        expect(stats.frequentWords).toEqual({ });
    });

    test('should return correct frequent words if above the threshold', () => {
        const content = 'hello hello hello hello hello world hello hello hello hello hello hello world';
        const stats = processor.processFile(content);
        expect(stats.frequentWords).toEqual({ hello: 11 });
    });
});
