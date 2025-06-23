'use client';
import { ResponsiveTimeRange } from '@nivo/calendar';
import { useEffect, useState } from 'react';

export default function TrainingCalendar({ data }) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			{isClient ? (
				<ResponsiveTimeRange
					data={data}
					from={new Date(2025, 0, 1)}
					to={new Date(2025, 8, 0)}
					emptyColor='#eeeeee'
					margin={{ top: 40, right: 40, bottom: 10, left: 40 }}
					maxValue={30}
					dayBorderWidth={2}
					dayBorderColor='#ffffff'
					legends={[
						{
							anchor: 'bottom-right',
							direction: 'row',
							itemCount: 4,
							itemWidth: 42,
							itemHeight: 36,
							itemsSpacing: 14,
							itemDirection: 'right-to-left',
							translateX: -60,
							translateY: -60,
							symbolSize: 20,
						},
					]}
				/>
			) : (
				<p>Loading calendar!</p>
			)}
		</>
	);
}
