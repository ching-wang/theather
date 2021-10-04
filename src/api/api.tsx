export const baseUrl = "https://api.tvmaze.com/";

export const apiGet = (query: string) => {
  query = query.replace(/^\//, "");
  const url = `${baseUrl}${query}`;
  return fetch(url).then((resp) => resp.json());
};
