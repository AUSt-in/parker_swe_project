// src/components/Map.js
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useMemo } from "react";

const Map = ({ markers }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const center = useMemo(() => ({ lat: 35.7596, lng: -79.0193 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      zoom={8}
      center={center}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          onClick={() => setSelectedMarker(marker)}
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div>
            <h2>{selectedMarker.name}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
