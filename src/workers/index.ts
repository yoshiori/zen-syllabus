import { handleRequest } from './handler';

export default {
  async fetch(request: Request, _env: Env, _ctx: unknown): Promise<Response> {
    return handleRequest(request);
  },
};

export interface Env {
  // Environment bindings will be added here as needed
  [key: string]: unknown;
}
