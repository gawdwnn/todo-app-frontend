'use client';

import { useState } from 'react';
import { Check, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Task } from '@/types/task';
import { DeleteDialog } from '@/components/delete-dialog';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <Link href={`/edit/${task.id}`}>
        <div className={`p-4 rounded-lg flex items-start gap-4 bg-[#333333]`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggle(task.id);
            }}
            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
              ${task.completed ? `bg-[#5E60CE] border-[#5E60CE]` : 'border-[#4EA8DE]'}`}
          >
            {task.completed && <Check className='w-3 h-3 text-white' />}
          </button>

          <div className='flex-1 min-w-0'>
            <p
              className={`text-sm leading-5 break-words transition-all ${
                task.completed
                  ? 'line-through text-[#808080]'
                  : 'text-[#F2F2F2] group-hover:text-white'
              }`}
            >
              {task.title}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setShowDeleteDialog(true);
            }}
            className='text-[#808080] hover:text-[#E25858] hover:bg-[#333333] p-1 rounded transition-colors'
          >
            <Trash2 className='w-5 h-5' />
          </button>
        </div>
      </Link>

      <DeleteDialog
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() => {
          onDelete(task.id);
          setShowDeleteDialog(false);
        }}
      />
    </>
  );
}
