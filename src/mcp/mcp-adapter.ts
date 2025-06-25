import { MCPServer } from './server';

export class MCPServerAdapter {
  private mcpServer: MCPServer;
  private server: unknown;

  constructor() {
    this.mcpServer = new MCPServer();
  }

  createServer(): unknown {
    return this.server;
  }

  async run(): Promise<void> {
    // Will be implemented with actual MCP SDK integration
    console.log('MCP Server running...');
  }
}
