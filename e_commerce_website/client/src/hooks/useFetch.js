import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setDate] = useState();

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setDate(res);
    };

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    return { data };
};

export default useFetch;
