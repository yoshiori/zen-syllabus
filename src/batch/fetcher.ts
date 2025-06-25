import { promises as fs } from 'fs';
import path from 'path';

export interface FetchedData {
  timestamp: number;
  content: string;
}

export interface RunResult {
  success: boolean;
  filename?: string;
  error?: string;
}

export class DataFetcher {
  private dataDir: string = path.join(process.cwd(), 'data');

  async fetch(): Promise<FetchedData> {
    return {
      timestamp: Date.now(),
      content: 'Fetched syllabus data',
    };
  }

  async save(data: FetchedData): Promise<string> {
    await this.ensureDataDirectory();

    const date = new Date(data.timestamp);
    const filename = `data-${date
      .toISOString()
      .replace(/:/g, '-')
      .replace(/\.\d{3}Z$/, '')}.json`;
    const filepath = path.join(this.dataDir, filename);

    await fs.writeFile(filepath, JSON.stringify(data, null, 2));
    return filename;
  }

  async run(): Promise<RunResult> {
    try {
      const data = await this.fetch();
      const filename = await this.save(data);
      return {
        success: true,
        filename,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private async ensureDataDirectory(): Promise<void> {
    try {
      await fs.access(this.dataDir);
    } catch {
      await fs.mkdir(this.dataDir, { recursive: true });
    }
  }
}
