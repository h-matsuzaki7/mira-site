export async function onRequest(context) {
  const { request, next } = context;

  // ここで好きなIDとパスワードを設定します（書き換えてください）
  const USER = "medical";
  const PASS = "20mi26ra";

  const authorization = request.headers.get("Authorization");

  if (authorization) {
    const [scheme, encoded] = authorization.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const index = decoded.indexOf(":");
      const user = decoded.slice(0, index);
      const pass = decoded.slice(index + 1);

      if (user === USER && pass === PASS) {
        return next();
      }
    }
  }

  return new Response("認証が必要です。", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area", charset="UTF-8"',
    },
  });
}
