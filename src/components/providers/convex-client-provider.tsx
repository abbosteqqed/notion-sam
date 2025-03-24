'use client';
import { ChildProps } from '@/types';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.VITE_CONVEX_URL as string);
const ConvexClientProvider = ({ children }: ChildProps) => {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
		>
			<ConvexProviderWithClerk
				client={convex}
				useAuth={useAuth}
			>
				{children}
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
};

export default ConvexClientProvider;
