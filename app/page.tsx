import { getActivities, getRoutes, getStats } from "./lib/strava";

export default async function Page() {
	const activities = await getActivities();
	const stats = await getStats();
	const routes = await getRoutes();
	console.log(routes);
	return (
		<div>
			<h1>Strava Page</h1>
			<h2>
				Year to date running:{" "}
				<span>{stats.ytd_run_totals.distance / 1000}km</span>
			</h2>
			<ul>
				{activities.map((activity) => (
					<div key={activity.id}>
						<li>{activity.name}</li>
						<li>{activity.distance}</li>
					</div>
				))}
			</ul>
			<ul>
				{routes.map((route) => (
					<li key={route.id}>
						<p>{route.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
