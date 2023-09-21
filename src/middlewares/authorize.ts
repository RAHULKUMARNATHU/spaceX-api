const Errors = {
  privilege: new Error("Privilege error"),
};

/**
 * Validates the request by checking the presence of the authkey header.
 * If the header is missing, it throws a privilege error.
 * If the header value is not "7777", it throws a privilege error.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 * @return {Promise} - A promise that resolves when the validation is complete.
 */
export const validate = async (req, res, next) => {
  try {
    const token = req.headers.authkey;

    if (!token) {
      console.error("PRIVILEGE_ERROR_CHECK");
      throw Errors.privilege;
    }

    if (token === "7777") next();
    else throw Errors.privilege;
  } catch (error) {
    return next(error);
  }
};
