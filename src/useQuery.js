import { useState, useEffect } from "react";
import axios from "axios";

const useQuery = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data } = await axios.get(url);
            // console.log(data.data);
            setData(data.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const refetch = () => {};

    return { data, refetch };
};

export default useQuery;
