import React from "react";
import useFetch from "../hook/useFetch";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import DataDispaly from "../components/DataDisplay/DataDispaly";
import HeadBodyGrid from "../components/HeadBodyGrid/HeadBodyGrid";
import Search from "../utilities/Search";

const SearchPage = () => {
  const { data, error, loading } = useFetch();
  //   if (loading) return <HeadBodyGrid />;
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  return (
    <React.Fragment>
      <div className="position-sticky top-0 z-1">
        <Search />
      </div>
      {/* <DataDispaly data={data} />; */}
    </React.Fragment>
  );
};

export default SearchPage;
