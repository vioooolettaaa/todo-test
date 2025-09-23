import { fetchBase } from '@shared/api/apiBase';
import type { Task } from '../model/taskStore';

type FetchProps = {
  onSuccess: (data: Task[]) => void;
  onError: (err: any) => void;
};

type FetchDeleteProps = FetchProps & {
  taskId: string;
};

type FetchAddProps = FetchProps & {
  item: Record<string, any>;
};

export const fetchNotReadyTasks = ({ onSuccess, onError }: FetchProps) =>
  fetchBase({
    url: `/task/not-ready`,
    onSuccess,
    onError,
  });

export const fetchReadyTasks = ({ onSuccess, onError }: FetchProps) =>
  fetchBase({
    url: `/task/ready`,
    onSuccess,
    onError,
  });

export const fetchDeleteTasks = ({ onSuccess, onError, taskId }: FetchDeleteProps) =>
  fetchBase({
    url: `/task/delete`,
    onSuccess,
    onError,
    options: {
      method: 'DELETE',
      body: JSON.stringify({ id: taskId }),
    },
  });

export const fetchAddTasks = ({ onSuccess, onError, item }: FetchAddProps) =>
  fetchBase({
    url: `/task/add`,
    onSuccess,
    onError,
    options: {
      method: 'POST',
      body: JSON.stringify(item),
    },
  });
