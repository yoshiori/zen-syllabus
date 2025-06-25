import { describe, it, expect, beforeEach } from 'vitest';
import { MCPServer } from '../../src/mcp/server';

describe('MCPServer', () => {
  let server: MCPServer;

  beforeEach(() => {
    server = new MCPServer();
  });

  describe('initialization', () => {
    it('should create a server instance', () => {
      expect(server).toBeDefined();
    });

    it('should have a name', () => {
      expect(server.getName()).toBe('zen-syllabus');
    });

    it('should have a version', () => {
      expect(server.getVersion()).toBe('1.0.0');
    });
  });

  describe('tools', () => {
    it('should list available tools', async () => {
      const tools = await server.listTools();
      expect(tools).toBeDefined();
      expect(Array.isArray(tools)).toBe(true);
    });

    it('should have a getSyllabus tool', async () => {
      const tools = await server.listTools();
      const getSyllabusTool = tools.find(tool => tool.name === 'getSyllabus');
      expect(getSyllabusTool).toBeDefined();
      expect(getSyllabusTool?.description).toBe('Get syllabus information');
    });
  });

  describe('tool execution', () => {
    it('should execute getSyllabus tool', async () => {
      const result = await server.executeTool('getSyllabus', {});
      expect(result).toBeDefined();
      expect(result.content).toBeDefined();
    });

    it('should throw error for unknown tool', async () => {
      await expect(server.executeTool('unknownTool', {})).rejects.toThrow('Tool not found');
    });
  });
});