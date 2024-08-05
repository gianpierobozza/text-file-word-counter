export interface FileStats {
    words: number;
    letters: number;
    spaces: number;
    frequentWords: { [key: string]: number };
  }
  