const BASE_URL = 'http://localhost:3001';

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/category`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};