import axios from "axios";

/**
 * Fetches data from a service using the specified method and URL.
 *
 * @param {object} options - An object containing the method and URL.
 * @param {string} options.method - The HTTP method to use for the request.
 * @param {string} options.url - The URL to send the request to.
 * @return {Promise} A promise that resolves to the response from the service.
 */
export const fetchFromService = async ({
  method,
  url,
}: {
  method: string;
  url: string;
}) => {
  let config = {
    method,
    maxBodyLength: Infinity,
    url,
    headers: {},
  };

  try {
    return await axios.request(config);
  } catch (error) {
    throw error;
  }
};
