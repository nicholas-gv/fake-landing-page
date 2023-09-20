import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useEventData(eventID?: number) {
    const { data, error, isLoading} = useSWR(`/db.json`, fetcher);

    let eventData;

    if (eventID !== null && eventID !== undefined) {
        eventData = data?.data[eventID];
    } else {
        eventData = data?.data;
    }

    return {
        eventData,
        isLoading: isLoading,
        error,
    };
}
