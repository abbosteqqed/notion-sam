import Navbar from '@/features/home/components/navbar';
import { ChildProps } from '@/types';
import React from 'react';

const HomeLayout = ({ children }: ChildProps) => {
	return (
		<div className='h-full'>
			<Navbar />
			<main className='h-full pt-40'>{children}</main>
		</div>
	);
};

export default HomeLayout;
