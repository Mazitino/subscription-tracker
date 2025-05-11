const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err }
    error.message = err.message

    console.error(err);

    // Mongoose bad ObjectId error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`
      error = new e.Error(message, 404)
      error.statusCode = 404
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
      const message = `Duplicate field value entered: ${err.keyValue.name}`
      error = new e.Error(message, 400)
      error.statusCode = 400
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message)
      error = new e.Error(message.join(', '), 400)
      error.statusCode = 400
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    })

  } catch (error) {
    next(error)
  }

}

export default errorMiddleware;
  