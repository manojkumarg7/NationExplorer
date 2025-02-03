import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BiWorld } from "react-icons/bi";
import "./DataDisplayStyle.css";
import { useNavigate } from "react-router-dom";
const DataDispaly = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (countryId) => {
    console.log("Card clicked with ID:", countryId);
    navigate(`/nationexplorer/country/${countryId}`);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {data &&
        data.map((country, index) => {
          return (
            <Card
              style={{ width: "18rem", margin: "10px" }}
              key={index}
              className="country-card"
              onClick={() => handleCardClick(country.cca2)}
            >
              <ListGroup variant="flush">
                <ListGroup.Item className="country-name d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0"> {country.name?.common}</p>
                    <p className="sub-country-name mb-0">
                      {country.translations.tur?.common}
                    </p>
                  </div>

                  <div className="border px-2 py-2 d-flex justify-content-between align-items-center rounded">
                    <BiWorld />
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span className="text-secondary">Country code (Alpha 2)</span>
                  {country.cca2}{" "}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between ">
                  {" "}
                  <span className="text-secondary">
                    Country code (Alpha 2)
                  </span>{" "}
                  {country.cca3}{" "}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span className="text-secondary">intl.dial code</span>{" "}
                  {country.idd.root + country.idd.suffixes[0]}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-secondary">Languages -</span>{" "}
                  {Object.entries(country.languages).map(([code, name]) => (
                    <span key={code}>
                      {name} ({code})
                    </span>
                  ))}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
    </div>
  );
};

export default DataDispaly;
