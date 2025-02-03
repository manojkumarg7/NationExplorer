import React, { useEffect, useRef, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./SearchInputStyle.css";
import { fetchData } from "../api/CountryApi/CountryApi";
import DataDispaly from "../components/DataDisplay/DataDispaly";
const Search = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState([]);
  const cancelBtnRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetchData(countryName);
      setCountryData(data);
    };

    fetchCountries();
  }, [countryName]);

  const handleChange = (e) => {
    setCountryName(e.target.value);
    if (cancelBtnRef.current) {
      cancelBtnRef.current.style.display = e.target.value ? "block" : "none";
    }
  };

  const handleClear = () => {
    setCountryName("");
    if (cancelBtnRef.current) {
      cancelBtnRef.current.style.display = "none";
    }
  };

  return (
    <React.Fragment>
      <div className="bg-primary w-100 position-sticky top-0 z-1">
        <h1 className="text-center py-2 text-light">Search for a country</h1>
        <InputGroup className="px-sm-5 px-2 mb-5 mt-3 py-3">
          <Form.Control
            placeholder="Enter a country name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="rounded-0"
            value={countryName}
            onChange={handleChange}
          />
          <InputGroup.Text
            id="basic-addon1"
            ref={cancelBtnRef}
            className="bg-dark text-light"
            style={{ display: "none" }}
            onClick={handleClear}
          >
            X
          </InputGroup.Text>
        </InputGroup>
      </div>
      <DataDispaly data={countryData} />
    </React.Fragment>
  );
};

export default Search;
