import { __awaiter } from "tslib";
import { fetchFromService } from "../helpers/fetchFromAPI";
export default class SpaceXService {
    constructor() { }
    /**
     * Retrieves SpaceX data asynchronously.
     *
     * @return {Promise<any>} A promise that resolves with the SpaceX data.
     */
    spaceXData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getSpaceXData();
        });
    }
    /**
     * Retrieves SpaceX data from the API.
     *
     * @return {Promise<any>} A promise that resolves with the SpaceX data.
     */
    getSpaceXData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetchFromService({
                method: "get",
                url: `https://api.spacexdata.com/v3/capsules`,
            });
        });
    }
}
