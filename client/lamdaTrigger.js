import https from "https";

export const handler = async (event) => {
  const postData = JSON.stringify({
    username:
      event.request.userAttributes["preferred_username"] || event.userName,
    cognitoId: event.userName,
    profilePictureUrl: "i1.jpg",
    tramId: 1,
  });

  const options = {
    hostname: "29g369ggf3.execute-api.us-east-1.amazonaws.com/prod",
    port: 443,
    path: "/create-user",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const responseBody = await new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding("utf8");
      let responseBody = "";
      res.on("data", (chunk) => {
        responseBody += chunk;
      });
      res.on("end", () => resolve(responseBody));

      req.on("error", (err) => {
        reject(err);
      });
      req.write(postData);
      req.end();
    });
  });

  return event;
};
