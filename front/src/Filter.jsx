import React, { useState, useEffect } from 'react';

const DataFilter = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = () => {
            const mockData = [
                'Apple', 'Banana', 'Cherry', 'Date',
                'Elderberry', 'Fig', 'Grape', 'Honeydew',
                'Kiwi', 'Lemon'
            ];
            setData(mockData);
        };

        fetchData();
    }, []);

    return <div>Data Filter Component</div>;
};

export default DataFilter;
