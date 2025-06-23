import { google } from 'googleapis';

const sheets = google.sheets('v4');

const SERVICE_ENDPOINT = 'https://sheets.googleapis.com';
const spreadSheetID = '1re2Kn_pqatODP0RTKe4WlfcrHRhsDtJiO3-nBN2tM1U';

const getSpreadSheetData = () => {
	const response = sheets.spreadsheets.get(
		`${SERVICE_ENDPOINT}/v4/spreadsheets/${spreadSheetID}`
	);
};
