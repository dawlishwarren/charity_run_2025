const appId = '5cc56043';
const pageShortName = 'alex-warren-mission-mars-run';

const ENDPOINT = `/${appId}/v1/fundraising/pages/${pageShortName}`;

export const getFundraiser = async () => {
	const response = await fetch(ENDPOINT, {
		// method: 'GET',
		// headers: {
		// 	Accept: 'application/json',
		// 	Host: 'api.staging.justgiving.com',
		// 	'Content-type': 'application/json',
		// },
		method: 'GET',
	});
	const json = await response.json();
	return json;
};
