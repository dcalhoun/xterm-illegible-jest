const greet = require("../index");

it("greets the subject", async () => {
  await expect(greet("World")).resolves.toEqual("Hello, World!");
});
