import type { NextPage } from "next";
import Head from "next/head";
import { Map as OlMap } from "ol";
import { View } from "ol";
import MapboxVector from "ol/layer/MapboxVector";
import { Fragment, useEffect, useRef } from "react";

const Home: NextPage = () => {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mapRef.current) return;

		const view = new View({
			projection: "EPSG:3857",
			center: [3209683.751386, 5946074.648818],
			zoom: 13.5,
			minZoom: 8,
			maxZoom: 19,
		});

		const vectorLayer = new MapboxVector({
			styleUrl: "https://maptiles.railean.net/styles/osm-bright/style.json",
		});

		new OlMap({
			target: mapRef.current,
			// Removes all default controls
			controls: [],
			view,
			layers: [vectorLayer],
		});
	}, []);

	return (
		<Fragment>
			<Head>
				<title>Roata Wăy</title>
				<meta name="description" content="Transportul public din Chișinău" />
				<link rel="icon" href="https://fav.farm/%F0%9F%9A%8E" />
			</Head>

			<div ref={mapRef} className="h-screen" />
		</Fragment>
	);
};

export default Home;
