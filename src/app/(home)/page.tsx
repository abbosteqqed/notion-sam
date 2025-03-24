import Clients from '@/features/home/components/clients';
import { Footer } from '@/features/home/components/footer';
import Hero from '@/features/home/components/hero';
import Pricing from '@/features/home/components/pricing';

export default function Home() {
	return (
		<div className='min-h-full flex flex-col'>
			<div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
				<Hero />
				<Clients />
			</div>
			<Pricing />
			<Footer />
		</div>
	);
}
