export const exerciseOptions = {
  method: "GET",
  hostname: "exercisedb.p.rapidapi.com",
  port: null,
  headers: {
    "x-rapidapi-key": "f03327135cmsh0a573289ddb42d0p1edf88jsn9704f51e795c",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  hostname: "youtube-search-and-download.p.rapidapi.com",
  port: null,
  headers: {
    "x-rapidapi-key": "344207ae62mshde309feaef2a7e0p13850fjsn2fe5ccfcd7f7",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};
