import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataById } from "../../api/CountryApi/CountryApi";
import Loading from "../Loading/Loading";
import Table from "react-bootstrap/Table";
import "./CountryDestailsStyle.css";
const CountryDetails = ({ data }) => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const result = await fetchDataById(countryId);
        setCountry(result);
      } catch (error) {
        setError("Failed to fetch country details");
      } finally {
        setLoading(false);
      }
    };

    getCountryDetails();
  }, [countryId]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <div className="container-fluid">
      <h1 className="my-4 text-primary">{country?.name?.common}</h1>
      <img src={country?.flags?.svg} alt="" className="country-flag" />
      <div></div>
      <h2 className="my-3 text-muted">Names</h2>
      <Table striped>
        <thead>
          <tr>
            <th>common</th>
            <td>{country?.name?.common}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Official</th>
            <td>{country?.name?.official}</td>
          </tr>
          <tr>
            <th>Common (Native)</th>
            <td>{country?.name?.nativeName?.hin?.common}</td>
          </tr>
          <tr>
            <th>Official (Native)</th>
            <td>{country?.name?.nativeName?.hin?.official}</td>
          </tr>
          <tr>
            <th>Alternative spellings</th>
            <td>
              {country?.altSpellings.map((v, i) => (
                <span>{v},</span>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>

      <h2 className="my-3 text-muted">Languages</h2>

      <Table striped>
        <tbody>
          {country?.languages &&
            Object.entries(country.languages).map(([key, value], i) => (
              <tr key={i}>
                <th>{key}</th>
                <td>{value}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <h2 className="my-3 text-muted">Codes</h2>

      <Table striped>
        <thead>
          <tr>
            <th>ISO 3166-1 alpha-2</th>
            <td>{country?.cca2}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ISO 3166-1 alpha-3</th>
            <td>{country?.cca3}</td>
          </tr>
          <tr>
            <th>ISO 3166-1 numeric</th>
            <td>{country?.ccn3}</td>
          </tr>
          <tr>
            <th>International calling code</th>
            <td> {country.idd.root + country.idd.suffixes[0]}</td>
          </tr>
          <tr>
            <th>ISO 4217 currency code</th>
            <td>{country?.currencies && Object.keys(country.currencies)[0]}</td>
          </tr>
          <tr>
            <th>Top level domain</th>
            <td>{country?.tld}</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="my-3 text-muted">Geography</h2>
      <Table striped>
        <thead>
          <tr>
            <th>Region</th>
            <td>{country?.region}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Subregion</th>
            <td>{country?.subregion}</td>
          </tr>
          <tr>
            <th>capital</th>
            <td>{country?.capital}</td>
          </tr>
          <tr>
            <th>Demonyms</th>
            <td>{country?.demonyms?.eng?.f}</td>
          </tr>
          <tr>
            <th>Lat/lang</th>
            <td>{country?.capitalInfo?.latlng.join(" ,")}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{country?.area}</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td className="text-info">
              {country?.borders.map((v, i) => (
                <span>{v} ,</span>
              ))}
              ,
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CountryDetails;
