import type { Task } from '@entities/task/model/taskStore';

type FetchBaseProps = {
  onSuccess: (data: Task[]) => void;
  onError: (err: any) => void;
  options?: RequestInit;
  url: string;
};

const API_URL = `http://192.168.50.195:3000`;

export const fetchBase = async ({
  onSuccess,
  onError,
  options = {},
  url,
}: FetchBaseProps): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (onSuccess) {
      onSuccess(data);
    }
  } catch (error) {
    if (onError) {
      onError(error);
    } else {
      console.error('Error in fetchBase:', error);
    }
  }
};
