"use client"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import icon from "./icon"
import { FaGreaterThan } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="relative ">
      <img className='w-full h-[300px]'
        src="/images/pattern-bg-desktop.png"
        alt="bg-image"
      />
      <div className="absolute grid place-items-center gap-10 top-5 w-full">
        <h1 className="text-3xl md:text-4xl text-white font-semibold">IP Address Tracker</h1>
        <form className="flex">
          <input type="text" className="rounded-l-lg md:rounded-l-xl w-full md:w-[500px] h-12 px-2 md:px-5 text-md md:text-lg" placeholder="Search for any ip address or domain"/>
          <button type="submit" className="text-white bg-black rounded-r-lg md:rounded-r-xl w-10 flex items-center justify-center"><FaGreaterThan/></button>
        </form>
      </div>
      <div className="absolute top-[230px] w-full h-full px-5 md:h-[150px] flex justify-center items-center z-10">
        <div className="grid md:grid-cols-4 md:place-items-center w-full md:w-[1000px] h-full bg-white  px-10 rounded-xl">
          <div className="grid gap-4 md:border-r border-r-slate-500 pr-14 h-14 md:h-20">
            <h4 className="text-zinc-500 font-semibold text-sm">IP ADDRESS</h4>
            <h1 className="font-bold text-lg md:text-xl">192.212.174.101</h1>
          </div>
          <div className="grid gap-1 md:border-r border-r-slate-500 pr-14 h-14 md:h-20">
            <h4 className="text-zinc-500 font-semibold text-sm">LOCATION</h4>
            <h1 className="font-bold text-lg md:text-xl">BROOKLYN</h1>
          </div>
          <div className="grid gap-1 md:border-r border-r-slate-500 pr-14 h-14 md:h-20">
            <h4 className="text-zinc-500 font-semibold text-sm">TIME ZONE</h4>
            <h1 className="font-bold text-lg md:text-xl">UTC-05:00</h1>
          </div>
          <div className="grid gap-1 pr-14 h-14 md:h-20">
            <h4 className="text-zinc-500 font-semibold text-sm">ISP</h4>
            <h1 className="font-bold text-lg md:text-xl">SpaceX Starlink</h1>
          </div>
        </div>
      </div>
      <div className='relative z-0'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
        style={{height: "500px", width:"100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={icon} position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}