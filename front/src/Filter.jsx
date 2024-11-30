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

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};
