import { ErrorLogger } from "@/services/ErrorLogger";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const request = async (
  url: string,
  method: string,
  headers: Record<string, string> = {},
  body?: Object
) => {
  const logger = new ErrorLogger();
  try {
    const response = await fetch(`${baseUrl + url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response?.ok) {
      throw new Error("response was not ok");
    }
 const contentType = response.headers.get('content-type');

 if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data;
    }

  } catch (error: any) {
    logger.logError(" Menu", error, new Date().toISOString());
    throw error;
  }
};
