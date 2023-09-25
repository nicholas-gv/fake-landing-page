import axios from "axios";
import useSWR from "swr";

const JSON_DB_URL = "/db.json"

const getEventsAll = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data.data;    
    } catch (error) {
        throw error;
    }
};

const getEventsByID = async (url: string, id: number) => {
    try {
        const response = await axios.get(url);
        return response.data.data[id];       
    } catch (error) {
        throw error;
    }
};

export function useFetchEvents() {
	return {
		GetEventsAll: () => 
			useSWR(JSON_DB_URL, getEventsAll),
		GetEventsByID: (eventID: number) =>
			useSWR([JSON_DB_URL, eventID], ([url, eventID]) => getEventsByID(url, eventID)),
	};
}
