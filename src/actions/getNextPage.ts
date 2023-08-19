import { ApiData } from "../types";

export const getNextPage = (lastPage: ApiData, _pages: ApiData[]) => {
	const page = lastPage.info.next?.split('=')[1]
	return page;
}
