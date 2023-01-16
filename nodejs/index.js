const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

app.get("/", async (req, res) => {
  const connection = await db.connectToDb();

  await db.createTable(connection);
  await db.insertData(connection);

  const result = await db.selectData(connection);

  db.closeConnection(connection);

  const names = result.map((item) => item.name);
  const print = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${names.map((name) => `<li>${name}</li>`).join("")}
    </ul>
  `;

  res.send(print);
});

app.listen(port, () =>
  console.log(`Express server listening on port ${port}!`)
);
