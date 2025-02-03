const api_url = "https://restcountries.com/v3.1/independent?status=true";

export const fetchData = async () => {
  const response = await fetch(api_url);
  if (!response.ok) {
    throw new Error("Failed to fecth data");
  }

  return response.json();
};

export const fetchDataById = async (countryId) => {
  try {
    // const response = await fetch();
    //   `https://countries.petethompson.net/data/countries.json`
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    return data.find((country) => country.cca2 === countryId);
  } catch (error) {
    throw new Error("Failed to fetch country details");
  }
};
