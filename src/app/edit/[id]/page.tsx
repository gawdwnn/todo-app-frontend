'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { TaskForm } from '@/components/task-form';
import { Loading } from '@/components/loading';
import { Error } from '@/components/error';
import { api } from '@/lib/api';
import { Task } from '@/types/task';

interface Props {
  params: Promise<{ id: string }>;
}

export default function EditTask({ params }: Props) {
  const { id } = use(params);
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const task = await api.getTask(id);
        setTask(task);
      } catch (err: any) {
        if (err?.message?.includes('404')) {
          notFound();
        }
        setError('Failed to load task');
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!task) return <Error message="Task not found" />;

  return <TaskForm mode="edit" initialData={task} />;
}
