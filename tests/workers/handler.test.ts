import { describe, it, expect } from 'vitest';
import { handleRequest } from '../../src/workers/handler';

describe('Worker Handler', () => {
  describe('handleRequest', () => {
    it('should return 200 for GET /', async () => {
      const request = new Request('https://example.com/');
      const response = await handleRequest(request);

      expect(response.status).toBe(200);
      expect(response.headers.get('content-type')).toBe('application/json');
    });

    it('should return API info for GET /', async () => {
      const request = new Request('https://example.com/');
      const response = await handleRequest(request);
      const data = await response.json();

      expect(data).toHaveProperty('name', 'zen-syllabus');
      expect(data).toHaveProperty('version', '1.0.0');
      expect(data).toHaveProperty('endpoints');
    });

    it('should handle GET /syllabus', async () => {
      const request = new Request('https://example.com/syllabus');
      const response = await handleRequest(request);

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveProperty('content');
    });

    it('should return 404 for unknown routes', async () => {
      const request = new Request('https://example.com/unknown');
      const response = await handleRequest(request);

      expect(response.status).toBe(404);
      const data = await response.json();
      expect(data).toHaveProperty('error', 'Not found');
    });

    it('should only accept GET requests', async () => {
      const request = new Request('https://example.com/', { method: 'POST' });
      const response = await handleRequest(request);

      expect(response.status).toBe(405);
      const data = await response.json();
      expect(data).toHaveProperty('error', 'Method not allowed');
    });
  });
});
