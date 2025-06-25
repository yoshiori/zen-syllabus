import { describe, it, expect, beforeEach, vi } from 'vitest';
import { DataFetcher } from '../../src/batch/fetcher';

describe('DataFetcher', () => {
  let fetcher: DataFetcher;

  beforeEach(() => {
    fetcher = new DataFetcher();
  });

  describe('fetch', () => {
    it('should fetch data from source', async () => {
      const data = await fetcher.fetch();
      expect(data).toBeDefined();
      expect(data).toHaveProperty('timestamp');
      expect(data).toHaveProperty('content');
    });

    it('should include current timestamp', async () => {
      const before = Date.now();
      const data = await fetcher.fetch();
      const after = Date.now();

      expect(data.timestamp).toBeGreaterThanOrEqual(before);
      expect(data.timestamp).toBeLessThanOrEqual(after);
    });
  });

  describe('save', () => {
    it('should save data to file', async () => {
      const mockData = {
        timestamp: Date.now(),
        content: 'test content',
      };

      const filename = await fetcher.save(mockData);
      expect(filename).toMatch(/data-\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}\.json$/);
    });

    it('should create data directory if not exists', async () => {
      const mockData = {
        timestamp: Date.now(),
        content: 'test content',
      };

      await expect(fetcher.save(mockData)).resolves.not.toThrow();
    });
  });

  describe('run', () => {
    it('should fetch and save data', async () => {
      const result = await fetcher.run();
      expect(result).toHaveProperty('success', true);
      expect(result).toHaveProperty('filename');
    });

    it('should handle errors gracefully', async () => {
      vi.spyOn(fetcher, 'fetch').mockRejectedValueOnce(new Error('Fetch failed'));

      const result = await fetcher.run();
      expect(result).toHaveProperty('success', false);
      expect(result).toHaveProperty('error', 'Fetch failed');
    });
  });
});
