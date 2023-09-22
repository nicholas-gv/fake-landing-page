import axios from "axios";
import useSWR from "swr";

const getEventsAll = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data.data;    
    } catch (error) {
        console.error("Error fetching data:", error)
    }
};

const getEventsByID = async (url: string, id: number) => {
    try {
        const response = await axios.get(url);
        return response.data.data[id];       
    } catch (error) {
        console.error("Error fetching data:", error)
    }
};

export function useFetchEvents() {
	return {
		GetEventsAll: () => 
			useSWR("/db.json", getEventsAll),
		GetEventsByID: (eventID: number) =>
			useSWR(["/db.json", eventID], ([url, eventID]) => getEventsByID(url, eventID)),
	};
}
