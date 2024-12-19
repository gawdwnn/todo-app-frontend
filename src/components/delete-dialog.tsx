"use client"

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteDialog({
  isOpen,
  onClose,
  onConfirm,
}: DeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='bg-[#282828] rounded-lg p-6 max-w-sm w-full space-y-4'>
        <h3 className='text-lg font-semibold'>Delete Task</h3>
        <p className='text-gray-400'>
          Are you sure you want to delete this task?
        </p>
        <div className='flex gap-3'>
          <button
            onClick={onClose}
            className='flex-1 p-2 rounded border border-gray-600 hover:bg-gray-700 transition-colors'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 p-2 rounded bg-red-500 hover:bg-red-600 transition-colors'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
