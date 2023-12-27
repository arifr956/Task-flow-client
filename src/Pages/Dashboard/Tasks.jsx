
// /alltask/display
const Tasks = () => {
    const axiosSecure = useAxios();
  const [loaderData, setLoaderData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosSecure.get(`/alltask/single/${id}`).then((result) => {
      setLoaderData(result.data);
    });
  }, [axiosSecure, id]);
    return (
        <div>
            
        </div>
    );
};

export default Tasks;