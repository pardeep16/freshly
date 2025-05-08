import { smartSearch } from "../../data/dummy";
import { SearchOptions } from "../../types";


export const searchAPI = async (query:SearchOptions) => {
    const res = smartSearch(query);
    return Promise.resolve(res);
}