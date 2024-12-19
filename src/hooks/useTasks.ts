import { useState, useEffect, useCallback } from 'react';
import { api } from '@/lib/api';
import { Task } from '@/types/task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleTask = useCallback(async (id: string) => {
    try {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;

      await api.updateTask(id, { completed: !task.completed });
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      );
    } catch (err) {
      setError('Failed to update task');
    }
  }, [tasks]);

  const deleteTask = useCallback(async (id: string) => {
    try {
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    error,
    toggleTask,
    deleteTask,
    refetch: fetchTasks
  };
}
