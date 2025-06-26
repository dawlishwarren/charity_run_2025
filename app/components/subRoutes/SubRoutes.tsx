'use client';
import { useState } from 'react';
import Map from '../map/Map';
export default function SubRoutes({ routes }) {
	const [availableRoutes, setAvailableRoutes] = useState(
		routes.sort((a, b) => a.distance - b.distance)
	);
	function filterByLength(e: React.ChangeEvent<HTMLSelectElement>) {
		const optionValue = parseFloat(e.target.value);
		const upperLimit = optionValue + 3;
		const lowerLimit = optionValue - 3;
		setAvailableRoutes(
			e.target.value == 'none'
				? routes
				: routes.filter(
						(route) =>
							route.distance / 1000 >= lowerLimit &&
							route.distance / 1000 <= upperLimit
				  )
		);
		console.log(availableRoutes);
	}

	return (
		<div id='sub-routes' className='py-3'>
			<h3 className='py-3 text-2xl'>Find a route</h3>
			<p className='text-1xl'>
				Along the way are 14 rest stops, the routes between these rest stops are
				listed below in ascending order of length.
			</p>
			<h4 className='py-2 text-1xl'>Additionally, you can filter by length:</h4>
			<select
				name='length'
				id='length'
				className='bg-gray-100 w-xs md:w-md py-2 rounded-lg border'
				onChange={filterByLength}
				defaultValue='none'>
				<option value='5'>5km</option>
				<option value='10'>10km</option>
				<option value='15'>15km</option>
				<option value='21'>Half Marathon</option>
				<option value='42'>Marathon</option>
				<option value='none'>None</option>
			</select>
			<ul className='md:grid md:grid-cols-2 gap-8'>
				{availableRoutes.map(
					(route, iteration) =>
						route.description != null &&
						route.description.includes('Leeds Liverpool') && (
							<li key={route.id} className='py-3 my-3'>
								<h3 className='pt-3 text-2xl'>{route.name}</h3>
								<h4 className='pb-2'>
									Length: {(route.distance / 1000).toFixed(2)} km //{' '}
									{(route.distance / 1609.34).toFixed(2)} miles
								</h4>
								<Map
									polyline={availableRoutes[iteration].map.summary_polyline}
								/>
								<a
									className='block bg-orange-700 hover:bg-orange-500 text-white p-3 w-full text-center rounded-lg'
									href={`https://www.strava.com/routes/${route.id_str}`}
									target={'_blank'}>
									See route on Strava
								</a>
							</li>
						)
				)}
			</ul>
		</div>
	);
}
