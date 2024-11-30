import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Fetch3 = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="h-screen overflow-y-auto p-4 ">
      <div className="grid grid-cols-12 gap-4">
        {countries &&
          countries.map((country, index) => (
            <img key={index} src={country.flags.png} alt="flag" width={100} />
          ))}
      </div>
    </div>
  );
};

export default Fetch3;
