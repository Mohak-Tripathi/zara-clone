const app = require("./index");

const connect = require("./src/configs/db");

const port=process.env.PORT||8080
app.listen(port, async () => {
  try {
    await connect();

    console.log(`listening port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});