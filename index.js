module.exports = (subject, delay) =>
  new Promise(resolve =>
    setTimeout(() => resolve("Hello, " + subject + "!"), 2000)
  );
