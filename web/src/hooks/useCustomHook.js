import { useQuery } from '@apollo/client';
import React from 'react';

const useCustomHook = (query) => {
    const { data, loading, error } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data;
}

export default useCustomHook;