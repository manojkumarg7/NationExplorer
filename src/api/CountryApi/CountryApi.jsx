const api_url = "https://restcountries.com/v3.1/independent?status=true";

export const fetchData = async (countryName = "") => {
  const response = await fetch(api_url);
  if (!response.ok) {
    throw new Error("Failed to fecth data");
  }

  const data = await response.json();

  if (countryName) {
    return data.filter((country) =>
      country.name?.common.toLowerCase().includes(countryName.toLowerCase())
    );
  }

  return data;
};

export const fetchDataById = async (countryId) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    return data.find((country) => country.cca2 === countryId);
  } catch (error) {
    throw new Error("Failed to fetch country details");
  }
};
