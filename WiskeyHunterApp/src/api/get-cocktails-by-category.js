import { request } from './request';

export const getCocktailsByCategory = async ({ requestUrl, apiParams }) => {
  const drinks = await request({ requestUrl });
  return drinks;
};
