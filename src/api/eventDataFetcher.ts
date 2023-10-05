import axios from "axios";
import useSWR from "swr";
import { useEffect } from "react";

const JSON_DB_URL = "/db.json";

const getEventsAll = async (url: string, controller: AbortController) => {
	try {
		const response = await axios.get(url, { signal: controller.signal });
		return response.data.data;
	} catch (error) {
		throw error;
	}
};

const getEventsByID = async (url: string, id: number, controller: AbortController) => {
	try {
		const response = await axios.get(url, { signal: controller.signal });
		return response.data.data[id];
	} catch (error) {
		throw error;
	}
};

export function useFetchEvents() {
	const controller = new AbortController();

	useEffect(() => {
		return () => controller.abort();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		GetEventsAll: () => 
            useSWR(JSON_DB_URL, (url) => getEventsAll(url, controller)),
		GetEventsByID: (eventID: number) =>
			useSWR([JSON_DB_URL, eventID], ([url, eventID]) => getEventsByID(url, eventID, controller)),
	};
}
