import { Check } from 'lucide-react'
import React from 'react';

interface PricingCardProps {
	title: string;
	subtitle: string;
	options: string;

}

const PricingCard = ({
	title,
	subtitle,
	options,

}: PricingCardProps) => {
	return (
		<div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white'>
			<h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
			<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
				{subtitle}
			</p>

			<ul
				role='list'
				className='space-y-4 text-left mt-8'
			>
				{options.split(', ').map(option => (
					<li
						key={option}
						className='flex items-center space-x-3'
					>
						<Check className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400' />
						<span>{option}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PricingCard;
