import Image from 'next/image';
import React from 'react';

const Logo = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<Image
				src='/logo.svg'
				alt='logo'
				height={50}
				width={50}
				className='dark:hidden'
			/>
			<Image
				src='/logo-dark.svg'
				alt='logo'
				height={50}
				width={50}
				className='hidden dark:block'
			/>
			<p className='font-semibold text-xl'>Notion</p>
		</div>
	);
};

export default Logo;
