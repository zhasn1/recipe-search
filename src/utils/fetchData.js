export const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};
