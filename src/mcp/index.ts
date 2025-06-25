#!/usr/bin/env node
import { MCPServerAdapter } from './mcp-adapter';

async function main() {
  const adapter = new MCPServerAdapter();
  await adapter.run();
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});