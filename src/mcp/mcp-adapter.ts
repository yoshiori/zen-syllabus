import { MCPServer } from './server';

export class MCPServerAdapter {
  private mcpServer: MCPServer;
  private server: any;

  constructor() {
    this.mcpServer = new MCPServer();
  }

  createServer(): any {
    return this.server;
  }

  async run(): Promise<void> {
    // Will be implemented with actual MCP SDK integration
    console.log('MCP Server running...');
  }
}