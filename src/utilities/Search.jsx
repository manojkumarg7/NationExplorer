import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
const Search = () => {
  return (
    <div>
      <h1 className="text-center mt-2">Search for a country</h1>
      <InputGroup className="px-sm-5 px-2 mb-5 mt-3">
        <Form.Control
          placeholder="Enter a country name"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Search;
