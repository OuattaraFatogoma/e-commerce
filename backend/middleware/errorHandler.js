const errorHandlerMiddleware = async (err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ message: 'Something went wrong, please try again later' })
  }
  
  module.exports = errorHandlerMiddleware