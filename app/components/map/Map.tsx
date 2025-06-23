'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ClientMap = dynamic(() => import('./DynamicMap'), { ssr: false });

export default function Map(props) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return isClient ? <ClientMap props={props} /> : <p>Map Loading!</p>;
}
