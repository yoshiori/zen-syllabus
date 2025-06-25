export interface Tool {
  name: string;
  description: string;
}

export interface ToolResult {
  content: string;
}

export class MCPServer {
  private name: string = 'zen-syllabus';
  private version: string = '1.0.0';

  getName(): string {
    return this.name;
  }

  getVersion(): string {
    return this.version;
  }

  async listTools(): Promise<Tool[]> {
    return [
      {
        name: 'getSyllabus',
        description: 'Get syllabus information'
      }
    ];
  }

  async executeTool(toolName: string, params: Record<string, any>): Promise<ToolResult> {
    if (toolName === 'getSyllabus') {
      return {
        content: 'Syllabus content'
      };
    }
    throw new Error('Tool not found');
  }
}