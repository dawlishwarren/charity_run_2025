'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map/Map'), {
	ssr: false,
	loading: () => <p>Loading your map!</p>,
});

export default Map;
