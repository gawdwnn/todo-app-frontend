interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className='text-center text-red-500 space-y-3 my-32'>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className='text-[#2F80ED] hover:underline'>
          Try again
        </button>
      )}
    </div>
  );
}
