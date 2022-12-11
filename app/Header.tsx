import React from 'react';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-3 p-4 mb-4 bg-slate-200 text-center items-center'>
        <Bars3Icon height={48} width={48} className='w-[48px] h-[48px] cursor-pointer' />
        <Link href='/'>
          <h1 className='font-serif text-4xl'>
            The{' '}
            <span className='underline decoration-6 decoration-orange-400'>
              Gazete
            </span>{' '}
            News
          </h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
          <button
            className='hidden md:inline bg-slate-900 text-white px-4 
          lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'
          >
            Subscribe News
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
