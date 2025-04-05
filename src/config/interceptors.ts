import { type AxiosError, type AxiosResponse } from "axios";

export interface ConsoleError {
  status: number;
  data: unknown;
}

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response?.status === 401) {
    await Promise.reject(error);
  } else {
    if (error.response) {
      const errorMessage: ConsoleError = {
        status: error.response.status,
        data: error.response.data,
      };
      // eslint-disable-next-line no-console
      console.error(errorMessage);
    } else if (error.request) {
      // eslint-disable-next-line no-console
      console.error(error.request);
    } else {
      // eslint-disable-next-line no-console
      console.error("Error", error.message);
    }
    await Promise.reject(error);
  }
};
