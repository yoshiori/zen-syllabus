export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method !== 'GET') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { 'content-type': 'application/json' },
      }
    );
  }

  switch (path) {
    case '/':
      return new Response(
        JSON.stringify({
          name: 'zen-syllabus',
          version: '1.0.0',
          endpoints: ['/syllabus'],
        }),
        {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }
      );

    case '/syllabus':
      return new Response(
        JSON.stringify({
          content: 'Syllabus content from worker',
        }),
        {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }
      );

    default:
      return new Response(
        JSON.stringify({ error: 'Not found' }),
        {
          status: 404,
          headers: { 'content-type': 'application/json' },
        }
      );
  }
}