import { getRoutes, getStats } from './lib/strava';
import Link from 'next/link';

export default async function Page() {
	const stats = await getStats();
	const routes = await getRoutes();
	return (
		<div>
			<h1>Strava Page</h1>
			<Link href='/maps'>See all the routes</Link>
			<h2>
				Year to date running:{' '}
				<span>{stats.ytd_run_totals.distance / 1000}km</span>
			</h2>
			<h2>Routes over 100km:</h2>
			<ul>
				{routes.map(
					(route) =>
						route.distance > 100000 && (
							<li key={route.id}>
								<a
									href={`https://www.strava.com/routes/${route.id_str}`}
									target={'_blank'}>
									{route.name}
								</a>
							</li>
						)
				)}
			</ul>
		</div>
	);
}
