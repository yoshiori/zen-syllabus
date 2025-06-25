import { handleRequest } from './handler';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return handleRequest(request);
  },
};

export interface Env {
  // Environment bindings will be added here as needed
}