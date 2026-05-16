const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
  token?: string,
) {
 

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
  });
}