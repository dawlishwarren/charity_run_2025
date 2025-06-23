import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import polyline from '@mapbox/polyline';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const DynamicMap = ({ props }) => {
	const encodedPolyline = props.polyline;
	console.log(encodedPolyline);
	const decodedPolyline = polyline.decode(encodedPolyline);
	return (
		<MapContainer
			className='w-full aspect-3/2 rounded-lg my-3'
			bounds={decodedPolyline}
			zoom={12}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>

			<Polyline
				positions={decodedPolyline}
				pathOptions={{ weight: 6, color: 'rgba(236, 71, 52, 0.9)' }}
			/>
		</MapContainer>
	);
};
export default DynamicMap;
