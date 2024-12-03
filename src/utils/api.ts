const urlApi = "https://webapi.omoloko.ru/api/v1";

export const fetchProducts = (): Promise<any> => {
  return request(`/products?limit=10&offset=0`);
}

export async function request<T>(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${urlApi}${endpoint}`, options);
  return checkResponse<T>(res);
}

export default function checkResponse<T>(res: Response): Promise<T> {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((errorData) => {
    throw new Error(`Ошибка ${res.status}: ${errorData.message}`);
  });
}