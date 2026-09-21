export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "https://ogegaugaw.github.io",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (url.pathname === "/") {
      return new Response("LoveMeizu Key API OK", {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "https://ogegaugaw.github.io"
        }
      });
    }

    return new Response("Not Found", {
      status: 404
    });
  }
};
