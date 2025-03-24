import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<>
			<div className='max-w-3xl space-y-4'>
				<h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
					Write, plan, share. With AI at your side.
				</h1>
				<h3 className='text-base sm:text-xl md:text-2xl font-medium'>
					Notion is connected workspace where better, faster work happens.
				</h3>
				<Button>
					Get Notion Free <ArrowRight className='ml-2 size-4' />
				</Button>
			</div>
			<div className='flex flex-col items-center justify-center max-w-5xl'>
				<div className='flex items-center'>
					<div className='relative h-[400px] w-[400px] hidden md:block'>
						<Image
							src={'/men.svg'}
							className='dark:hidden object-cover'
							alt='Man'
							fill
						/>
						<Image
							src={'/men-dark.svg'}
							className='hidden dark:block object-cover'
							alt='Man'
							fill
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
