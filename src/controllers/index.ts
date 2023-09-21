import SpaceXService from "../services/spaceXService";

const Errors = {
  badRequest: "Internal Server Error",
};

/**
 * Retrieves SpaceX data and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The JSON response containing the fetched SpaceX data.
 */
const spaceXData = async (req, res) => {
  try {
    const spaceXService = new SpaceXService();

    const spaceXData = await spaceXService.spaceXData();
    return res.status(200).json({
      message: "Data fetched successfully",
      success: "ok",
      spaceXData: spaceXData.data,
    });
  } catch (error) {
    console.debug(error);
    throw Errors.badRequest;
  }
};

export default {
  spaceXData,
};
