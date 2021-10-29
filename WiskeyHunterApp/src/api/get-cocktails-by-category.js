import { request } from './request';

export const getDrinksByCategory = async ({ requestUrl, apiParams }) => {
  const { drinks } = await request({ requestUrl });
  return drinks;
};
