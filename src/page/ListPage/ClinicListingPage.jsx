import React from "react";
import FiltersSidebar from "../../component/FiltersSidebar";
import DoctorCard from "../../component/DoctorCard";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image5 from "../../assets/profileimage/Profile1.svg";
import Hospital from "../../assets/icon/Hospital.svg";
import Navbar from "../navbar/navbar"
import { Link } from 'react-router-dom';
const ClinicListingPage = () => {
  // Dynamic data for doctors
  const doctors = [
    {
      id: 1,
      name: "Dr. Kaviya Jain",
      degree: "MBBS - AIMS",
      location: "Lalpur, Ranchi, Jharkhand, 830001",
      coordinates: [23.3431, 85.3095],
      rating: 4.7,
      reviews: 200,
      gender: "Female",
      specialty: "General Physician",
      fee: 300,
      experience: 10,
      image: Image5,
      Hospital: Hospital,
    },
    {
      id: 2,
      name: "Dr. Jessica Gabriel",
      degree: "BDS - NIMHANS",
      location: "Harmu, Ranchi, Jharkhand, 830002",
      coordinates: [23.3641, 85.3087],
      rating: 4.5,
      reviews: 150,
      gender: "Female",
      specialty: "Dentist",
      fee: 350,
      experience: 8,
      image: Image5,
      Hospital: Hospital,
    },
    {
      id: 3,
      name: "Dr. Jonny Bhaiya",
      degree: "BDS - NIMHANS",
      location: "Harmu, Ranchi, Jharkhand, 830002",
      coordinates: [23.3547, 85.3165],
      rating: 4.5,
      reviews: 150,
      gender: "Male",
      specialty: "Dentist",
      fee: 350,
      experience: 8,
      image: Image5,
      Hospital: Hospital,
    },
  ];

  // Function to create custom icons dynamically
  const createCustomIcon = (imageUrl) => {
    return new L.Icon({
      iconUrl: imageUrl,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
      className: 'border-0 shadow-none', // Apply Tailwind directly here
    });
  };
  

  return (
    <>
  <Navbar/>
    <div className="flex w-full h-screen">
   
      {/* Sidebar */}
      <FiltersSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Unified Header */}
        <header className="p-4 border-b  flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Showing {doctors.length}+ Clinics in Ranchi, Jharkhand
          </h2>
          <select className="border p-2 rounded">
            <option>Top Rated</option>
            <option>Most Affordable</option>
            <option>Closest to Me</option>
          </select>
        </header>

        {/* Content and Map Section */}
        <div className="flex flex-row flex-1">
      
    
   
          {/* Doctor Listings */}
          <div className="flex-1 flex flex-col border-r overflow-y-auto">
            {doctors.map((doctor) => (
              <Link  to="/Profile">
              <DoctorCard key={doctor.id} {...doctor} />
              </Link>
            ))}
          </div>
 
          {/* Map Section */}
          <div className="w-1/3">
            <MapContainer
              center={[23.3441, 85.3095]} // Default center
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              {/* Tile Layer */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {/* Dynamic Markers for Doctors */}
              {doctors.map((doctor) => (
                <Marker
                  key={doctor.id}
                  position={doctor.coordinates}
                  icon={createCustomIcon(doctor.Hospital)}
                >
                  <Popup>
                    <div className="text-sm">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-12 h-12 rounded-full mx-auto mb-2"
                      />
                      <h3 className="font-bold text-center">{doctor.name}</h3>
                      <p className="text-center text-gray-500">
                        {doctor.specialty}
                      </p>
                      <p className="text-center text-gray-500">
                        {doctor.rating} ★ ({doctor.reviews} reviews)
                      </p>
                      <p className="text-center text-gray-500">
                        {doctor.location}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ClinicListingPage;
