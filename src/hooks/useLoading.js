import { useState, useEffect } from 'react';

export const useLoading = (fetchMethod, params) => {
    const [data, setData] = useState("");

    useEffect(() => {
        setData("");
        fetchMethod(params).then((res) => {
            setData(res.data);
        });
    }, [fetchMethod, params]);

    return data;
}