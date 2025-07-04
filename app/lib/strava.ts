const clientId = process.env.STRAVA_CLIENT_ID;
const clientSecret = process.env.STRAVA_CLIENT_SECRET;
const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

const userId = 5853187;
const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${userId}`;

const getAccessToken = async () => {
	const body = JSON.stringify({
		client_id: clientId,
		client_secret: clientSecret,
		refresh_token: refreshToken,
		grant_type: 'refresh_token',
	});
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body,
	});

	return response.json();
};

export const getActivities = async () => {
	const { access_token: accessToken } = await getAccessToken();
	const response = await fetch(
		`${ATHLETES_ENDPOINT}/activities?access_token=${accessToken}&per_page=200`
	);
	const json = await response.json();

	const publicActivities = json.filter(
		(activity) => activity.visibility === 'everyone'
	);

	return publicActivities;
};

export const getStats = async () => {
	const { access_token: accessToken } = await getAccessToken();
	const response = await fetch(
		`${ATHLETES_ENDPOINT}/stats?access_token=${accessToken}`,
		{ cache: 'force-cache' }
	);
	const json = await response.json();
	return json;
};

export const getRoutes = async () => {
	const { access_token: accessToken } = await getAccessToken();
	const response = await fetch(
		`${ATHLETES_ENDPOINT}/routes?access_token=${accessToken}`
	);
	const json = await response.json();
	const publicRoutes = json.filter((route) => route.private != true);
	return json;
};

export const getRouteById = async (strId: string) => {
	const ROUTES_ENDPOINT = `https://www.strava.com/api/v3/routes`;

	const { access_token: accessToken } = await getAccessToken();
	const response = await fetch(
		`${ROUTES_ENDPOINT}/${strId}?access_token=${accessToken}`,
		{ cache: 'force-cache' }
	);
	const json = await response.json();
	return json;
};
