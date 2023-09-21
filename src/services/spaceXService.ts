import { fetchFromService } from "../helpers/fetchFromAPI";

export default class SpaceXService {
  constructor() {}
  /**
   * Retrieves SpaceX data asynchronously.
   *
   * @return {Promise<any>} A promise that resolves with the SpaceX data.
   */
  public async spaceXData() {
    return await this.getSpaceXData();
  }

  /**
   * Retrieves SpaceX data from the API.
   *
   * @return {Promise<any>} A promise that resolves with the SpaceX data.
   */
  private async getSpaceXData() {
    return await fetchFromService({
      method: "get",
      url: `https://api.spacexdata.com/v3/capsules`,
    });
  }
}
