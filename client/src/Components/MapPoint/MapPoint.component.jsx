import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import { useSelector } from 'react-redux';
//import { useState } from 'react';

const MapPoint = (props) => {
    const position = [19.203202, 72.848688]
    return (
        <>
            <div className="w-full h-48">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full"
                >
                    <TileLayer
                        attribution='<a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    />
                    <Marker position={position}>
                        <Popup>{props.title}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}

export default MapPoint