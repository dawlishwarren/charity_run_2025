// To Do:
// After all server components are built, change how you display stats with flipnumbers

import TrainingCalendar from './TrainingCalendar';
// import FlipNumbers from 'react-flip-numbers';

export default function Training({ stats, activities }) {
	const calendarData = [{}];
	activities.map((activity) => {
		const date = activity.start_date.substring(0, 10);
		const distanceInKm = activity.distance / 1000;
		const distance = Math.round(distanceInKm * 100) / 100;
		calendarData.push({ value: distance, day: date });
	});
	return (
		<section id='training' className='md:w-4xl md:flex'>
			<div id='col_1' className='basis-1/4'>
				<h2 className='text-3xl'>My training</h2>
				<p>{'Stats (year-to-date)'}</p>
				<h4 className='underline'>Hours</h4>
				{/* <FlipNumbers height={12} width={12} color='red' background='white' play perspective={100} numbers='12345' /> */}
				<p className='pb-2'>
					{Math.round((stats.moving_time / 60 / 60) * 100) / 100} hours
				</p>
				<h4 className='underline'>Distance</h4>
				<p className='pb-2'>
					{Math.round((stats.distance / 1000) * 100) / 100} km
				</p>
				<h4 className='underline'>Runs</h4>
				<p className='pb-2'>{stats.count}</p>
			</div>
			<div id='col_2' className='basis-3/4'>
				<TrainingCalendar data={calendarData} />
			</div>
		</section>
	);
}
