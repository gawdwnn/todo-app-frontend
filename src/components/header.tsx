import Image from 'next/image'

export function Header() {
  return (
    <header className='bg-[#0D0D0D] px-4 py-12 sm:px-6 sm:py-16'>
      <div className='flex items-center justify-center gap-2'>
        <Image 
          src="/rocket.svg"
          alt="Rocket icon"
          width={18}
          height={18}
        />
        <h1 className='text-3xl sm:text-4xl font-extrabold'>
          <span className='text-[#4EA8DE]'>Todo</span>
          <span className='text-[#5E60CE]'>App</span>
        </h1>
      </div>
    </header>
  );
}
