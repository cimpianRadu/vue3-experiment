import { request } from './request';

export const getCategories = async ({ requestUrl, apiParams }) => {
  const drinks = await request({ requestUrl });
  return drinks;
};
