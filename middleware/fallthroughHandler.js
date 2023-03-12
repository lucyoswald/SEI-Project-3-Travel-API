const fallThroughHandler = async (req, res) => {
  return res.status(400).json({
    message: `No endpoint with the ${req.method} method and the url: ${req.url} can be found.`,
  });
};

export default fallThroughHandler;
