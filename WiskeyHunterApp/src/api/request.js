const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const request = async ({
  method = 'GET',
  requestUrl = '',
  headers = {
    Accept: 'text/html;json',
  },
  apiParams = null,
}) => {
  let url = new URL(`${BASE_URL}${requestUrl}`);
  let params = new URLSearchParams(url.search);

  return await fetch(url, {
    method,
    headers,
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error('Error on request');
      }
    })
    .catch((err) => {
      console.log('err ', err);
    });
};
