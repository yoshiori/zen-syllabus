import { describe, it, expect } from 'vitest';
import { MCPServerAdapter } from '../../src/mcp/mcp-adapter';

describe('MCP Integration', () => {
  it('should create MCP server adapter', () => {
    const adapter = new MCPServerAdapter();
    expect(adapter).toBeDefined();
  });

  it('should have createServer method', () => {
    const adapter = new MCPServerAdapter();
    expect(adapter.createServer).toBeDefined();
    expect(typeof adapter.createServer).toBe('function');
  });

  it('should have run method', () => {
    const adapter = new MCPServerAdapter();
    expect(adapter.run).toBeDefined();
    expect(typeof adapter.run).toBe('function');
  });
});
