import { FileStats } from '../types';

const DEFAULT_THRESHOLD = 10;

export abstract class Processor {
    abstract readFile(path: string): Promise<string>;
    protected threshold: number = DEFAULT_THRESHOLD;

    setThreshold(threshold: number): void {
        this.threshold = threshold;
    }

    processFile(content: string): FileStats {
        const words = this.countWords(content);
        const letters = this.countLetters(content);
        const spaces = this.countSpaces(content);
        const frequentWords = this.findFrequentWords(content);
        return { words, letters, spaces, frequentWords };
    }

    private countWords(content: string): number {
        return content.split(/\s+/).length;
    }

    private countLetters(content: string): number {
        return content.replace(/[^a-zA-Z]/g, '').length;
    }

    private countSpaces(content: string): number {
        return content.split(' ').length - 1;
    }

    private findFrequentWords(content: string): { [key: string]: number } {
        const words = content.split(/\s+/).filter(Boolean);
        const wordCount: { [key: string]: number } = {};

        words.forEach(word => {
            word = word.toLowerCase();
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
        
        return Object.fromEntries(Object.entries(wordCount).filter(([, count]) => count > this.threshold));
    }
}
