export function Loading() {
  return (
    <div className='min-h-screen bg-[#202020] px-6'>
      <div className='container mx-auto py-10 max-w-[736px]'>
        <div className='flex justify-between mb-6'>
          <div className='w-32 h-6 bg-[#282828] rounded' />
          <div className='w-32 h-6 bg-[#282828] rounded' />
        </div>

        <div className='space-y-3'>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className='flex items-center gap-3 p-4 rounded-lg bg-[#282828] animate-pulse'
            >
              <div className='w-5 h-5 rounded-full bg-[#333333]' />
              <div className='flex-1 h-5 bg-[#333333] rounded' />
              <div className='w-5 h-5 bg-[#333333] rounded' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
