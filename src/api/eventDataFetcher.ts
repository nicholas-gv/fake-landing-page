import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
        isError: error,
    };
}
