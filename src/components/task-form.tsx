'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/utils/constanst';
import { api } from '@/lib/api';

interface TaskFormProps {
  initialData?: {
    id?: string;
    title: string;
    color: string;
  };
  mode: 'create' | 'edit';
}

export function TaskForm({ initialData, mode }: TaskFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: initialData?.title ?? '',
    color: initialData?.color ?? colors[0],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === 'create') {
        await api.createTask(formData);
      } else if (initialData?.id) {
        await api.updateTask(initialData.id, formData);
      }
      router.push('/');
      router.refresh();
    } catch (err) {
      setError('Failed to save task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='max-w-3xl mx-auto p-6'>
      <Link
        href='/'
        className='text-gray-400 hover:text-white transition-colors my-10 block'
      >
        <Image src='/arrow-left.svg' alt='Arrow left' width={16} height={16} />
      </Link>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div className='space-y-2'>
          <label className='text-[#2F80ED] text-sm font-medium'>Title</label>
          <input
            type='text'
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder='Ex. Brush your teeth'
            className='w-full bg-[#282828] rounded-lg p-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]'
            required
          />
        </div>

        <div className='space-y-2'>
          <label className='text-[#2F80ED] text-sm font-medium'>Color</label>
          <div className='flex gap-3 flex-wrap'>
            {colors.map((color) => (
              <button
                key={color}
                type='button'
                onClick={() => setFormData({ ...formData, color })}
                className={`w-10 h-10 rounded-full ${
                  formData.color === color
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black'
                    : ''
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-[#2F80ED] text-white rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-[#2D74D7] transition-colors font-medium'
        >
          {mode === 'create' ? 'Add Task' : 'Save'}
          <Image 
            src={mode === 'create' ? '/plus-icon.svg' : '/check-bold.svg'} 
            alt={mode === 'create' ? 'Plus icon' : 'Check icon'} 
            width={16} 
            height={16} 
          />
        </button>
      </form>
    </main>
  );
}
