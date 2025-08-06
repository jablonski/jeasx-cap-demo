import cap from "./cap";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function ({ request, reply }) {
  if (request.method === "POST") {
    const token = request.body?.["cap-token"];
    if (token) {
      reply.header("content-type", "application/json");
      return JSON.stringify(await cap.validateToken(token));
    }
  }

  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href={`/index.css?${process.env.BUILD_TIME}`}
          />
          <script
            type="module"
            src={`/index.js?${process.env.BUILD_TIME}`}
          ></script>
          <title>Cap.s</title>
        </head>
        <body>
          <form action="/" method="post">
            <cap-widget data-cap-api-endpoint="/"></cap-widget>
            <input type="submit" />
          </form>
        </body>
      </html>
    </>
  );
}
