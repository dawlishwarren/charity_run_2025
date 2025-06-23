// TODO:
// 1. Move Strava Routes to current page
// 2. Display current training distance total
// 3. Create table of approx timings and rest stops
// 4. Add section for Charity and add link to JustGiving
// 5. Create a jotform and link to it in #get-involved

import Map from './components/map/Map';
import SubRoutes from './components/subRoutes/SubRoutes';
import Training from './components/training/Training';
import { getRoutes, getStats, getRouteById, getActivities } from './lib/strava';

export default async function Page() {
	const activities = await getActivities();
	const stravaStats = await getStats();
	// const sheetsData = await getSheetsData();
	// console.log(sheetsData);
	const yearToDate = stravaStats.ytd_run_totals;

	const routes = await getRoutes();
	const fullRoute = await getRouteById('3347513386089739026');
	return (
		<main className='flex flex-col basis-auto justify-center md:items-center p-7 gap-y-14 bg-cyan-100'>
			<h1 className='font-mono text-5xl'>Great Mission Mars Run</h1>
			<section id='summary' className='md:w-4xl'>
				<h2 className='text-3xl'>Summary</h2>
				<p className='py-3'>
					A fundraising run from Leeds, starting in Rudy’s Headingley,
					travelling to Manchester and on to Liverpool, connecting all of the
					Mission Mars sites en route. The 100 mile route will be run in one,
					starting in the evening of Sunday 17th of August and into the day of
					Monday 18th, with plenty of options for runners and support to get
					involved from anything 5km or less, all the way up to ultramarathon.
				</p>
			</section>
			<section id='charity' className='md:w-4xl'>
				<h2 className='text-3xl'>Charity</h2>
				<p className='py-3'>
					In memory of William Low, who lost his stoic fight against
					Medulloblastoma brain tumours just a few weeks before his 18th
					birthday. His family and friends want to improve outcomes for others
					through funding research and other activities which impact on
					wellbeing.
				</p>
				<a
					className='block bg-purple-900 hover:bg-purple-700 text-white p-3 w-full text-center rounded-lg'
					href='https://www.justgiving.com/page/alex-warren-mission-mars-run'
					target='_blank'>
					Justgiving Page
				</a>
			</section>
			<Training stats={yearToDate} activities={activities} />
			<section id='get-involved' className='md:w-4xl'>
				<h2 className='text-3xl'>Get involved</h2>
				<p className='py-3'>Run with me:</p>
				<p>Volunteer:</p>
				{/* Link to jotform */}
			</section>
			<section id='route' className='md:w-4xl'>
				<h2 className='text-3xl'>The Route</h2>
				<div id='full-route-map'>
					<h3 className='py-3 text-2xl'>{fullRoute.name}</h3>
					<h4 className='pb-2'>
						Length: {(fullRoute.distance / 1000).toFixed(2)} km //{' '}
						{(fullRoute.distance / 1609.34).toFixed(2)} miles
					</h4>
					<Map polyline={fullRoute.map.summary_polyline} />
					<a
						className='block bg-orange-700 hover:bg-orange-500 text-white p-3 w-full text-center rounded-lg'
						href={`https://www.strava.com/routes/${fullRoute.id_str}`}
						target={'_blank'}>
						See route on Strava
					</a>
				</div>
				<SubRoutes routes={routes} />
			</section>
			<section id='timings'>
				<h2 className='text-3xl'>Timings</h2>
				{/* TODO: Look into importing google sheets data */}
				{/* Use data to create Table component */}
				{/* Display */}
			</section>
		</main>
	);
}
