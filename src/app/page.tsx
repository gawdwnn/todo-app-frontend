'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Error } from '@/components/error';
import { Loading } from '@/components/loading';
import { TaskCard } from '@/components/task-card';
import { useTasks } from '@/hooks/useTasks';
import { Task } from '@/types/task';

export default function Home() {
  const { tasks, loading, error, toggleTask, deleteTask, refetch } = useTasks();

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={refetch} />;

  const completedCount = tasks?.filter((task: Task) => task.completed).length;

  return (
    <div className='min-h-screen flex-1 bg-[#202020] px-6'>
      <div className='relative container mx-auto py-10 gap-2 max-w-[736px]'>
        <div className='absolute -top-7 left-1/2 -translate-x-1/2 w-full max-w-[736px]'>
          <Link
            href='/create'
            className='w-full bg-[#1E6F9F] text-white rounded-lg p-4 flex items-center justify-center gap-2 hover:opacity-90 transition-all'
          >
            Create Task
            <Image
              src='/plus-icon.svg'
              alt='Plus icon'
              width={16}
              height={16}
            />
          </Link>
        </div>

        <div className='mt-10'>
          <div className='flex justify-between text-base py-4'>
            <span className='text-[#4EA8DE] font-medium'>
              Tasks{' '}
              <span className='bg-[#333333] text-white px-2 py-1 rounded-full'>
                {tasks.length}
              </span>
            </span>
            <span className='text-[#5E60CE]'>
              Completed{' '}
              <span className='bg-[#333333] text-white px-2 py-1 rounded-full'>
                {completedCount} of {tasks.length}
              </span>
            </span>
          </div>

          {tasks.length === 0 ? (
            <>
              <div className='h-[1px] w-full bg-[#333333] my-6' />
              <div className='flex flex-col items-center justify-center text-center space-y-4 text-gray-400 my-20'>
                <Image
                  src='/clipboard.svg'
                  alt='Clipboard icon'
                  width={40}
                  height={40}
                />
                <div className='space-y-2'>
                  <p>You don't have any tasks created yet.</p>
                  <p>Create tasks and organize your to-do items.</p>
                </div>
              </div>
            </>
          ) : (
            <div className='space-y-4'>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
