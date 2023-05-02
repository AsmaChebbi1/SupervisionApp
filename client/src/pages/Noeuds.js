import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import NavSup from "../components/NavSup";
import Nav from "../components/Nav";
import "../Style/noeud.css";
import vert from "./vert.png";
import rouge from "./rouge.png";
import orange from "./orange.png";
import NormalFetching from "./NormalFetching";
import CoupureFetching from "./CoupureFetching";
import MediocreFetching from "./NodesMediocre";
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux' ;
import axios from 'axios';
const center = [34.318635802728444, 9.505832360266275];
const markerIcon = new L.Icon({
    iconUrl: require("./rouge.png"),
    iconSize: [15, 15],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
const markerIco = new L.Icon({
    iconUrl: require("./orange.png"),
    iconSize: [15, 15],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
const markerIc = new L.Icon({
    iconUrl: require("./vert.png"),
    iconSize: [15, 15],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

function Noeuds() {
    const [nodes, setNodes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/nodescoupure')
            .then(res => {
                console.log(res)
                setNodes(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    const [noeuds, setNoeuds] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/nodesmediocre')
            .then(res => {
                console.log(res)
                setNoeuds(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    const [sites, setSites] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/nodes')
            .then(res => {
                console.log(res)
                setSites(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const auth = useSelector(state => state.auth)
    const user={
      isConnected: auth.isConnected,//on l'envoi avec props
      role: auth.user.role
    }
    return (
        <div>
            <NavSup user={user} />
            <Nav />
            <br />
            <div >
                <MapContainer className="map" center={center} zoom={6}>
                    <TileLayer url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=3awhDCv7ZCVPfs7TKEz7"
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    >

                    </TileLayer>
                    {nodes.map((node, id) => (
                        <Marker
                            position={[node.lat, node.lng]}
                            icon={markerIcon}
                            key={id}
                        >
                        </Marker>
                    ))}
                     {noeuds.map((noeud, id) => (
                        <Marker
                            position={[noeud.lat, noeud.lng]}
                            icon={markerIco}
                            key={id}
                        >
                        </Marker>
                    ))}
                     {sites.map((site, id) => (
                        <Marker
                            position={[site.lat, site.lng]}
                            icon={markerIc}
                            key={id}
                        >
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <br /> <br /><br /> <br />
            <br /> <br />


            <table>
                <thead>
                    <tr>
                        <th > <img alt="" className="rouge"
                            src={rouge} /> <label><b>Coupure</b></label> <br /></th>
                        <th><img alt="" className="orange"
                            src={orange} /> <label><b>Médiocre</b></label> </th>
                        <th><img alt="" className="vert"
                            src={vert} /> <label><b>Normal</b></label> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><CoupureFetching/></td>
                        <td><MediocreFetching/></td>
                        <td><NormalFetching/></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Noeuds;