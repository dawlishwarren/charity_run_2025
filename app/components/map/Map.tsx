'use client';

import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	Polyline,
	PolylineProps,
} from 'react-leaflet';
import style from './Map.module.css';
import polyline from '@mapbox/polyline';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const Map = ({ ...props }) => {
	const encodedPolyline = props.polyline;
	const decodedPolyline = polyline.decode(encodedPolyline);

	return (
		<MapContainer
			className={style.map}
			// center={decodedPolyline[0]}
			bounds={decodedPolyline}
			zoom={12}
			scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<Polyline
				positions={decodedPolyline}
				pathOptions={{ weight: 6, color: 'blue' }}
			/>
		</MapContainer>
	);
};

export default Map;
