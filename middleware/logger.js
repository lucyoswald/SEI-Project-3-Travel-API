const logger = (req, res, next) => {
  console.log(req.params);
  console.log(`🚨 ${req.method} Request recieved at ${req.url}`);

  if (Object.keys(req.body).length) {
    console.log("Request body: ", req.body);
  }

  next();
};

export default logger;
