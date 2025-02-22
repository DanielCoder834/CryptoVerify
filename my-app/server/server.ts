import express, { Request, Response } from "express";
const { AccountId, PrivateKey, Client } = require("@hashgraph/sdk");
// npx tsx server/server.ts
const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  let client;
  try {
    // Your account ID and private key from string value
    const MY_ACCOUNT_ID = AccountId.fromString(process.env.accountId);
    const MY_PRIVATE_KEY = PrivateKey.fromStringED25519();

    // Pre-configured client for test network (testnet)
    client = Client.forTestnet();

    //Set the operator with the account ID and private key
    client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);

    // Start your code here
  } catch (error) {
    console.error(error);
  } finally {
    if (client) client.close();
  }
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
