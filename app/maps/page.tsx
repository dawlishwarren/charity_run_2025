import React from 'react';
import { getRoutes } from '../lib/strava';
import Map from '../components';
import Link from 'next/link';

export default async function page() {
	const routes = await getRoutes();
	return (
		<main>
			<div>Map Page!</div>
			<ul>
				{routes.map(
					(route, iteration) =>
						route.description != null &&
						route.description.includes('Mission') && (
							<li key={route.id}>
								<h2>{route.name}</h2>
								<h3>Length: {(route.distance / 1000).toFixed(2)}km</h3>
								<Map polyline={routes[iteration].map.summary_polyline} />
								<Link
									href={`https://www.strava.com/routes/${route.id_str}`}
									target={'_blank'}>
									See route on Strava
								</Link>
							</li>
						)
				)}
			</ul>
		</main>
	);
}

// Create a map

// Get the first route (routes[0])

// Get the polyline from the route

// Add to the map as props
