import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"; // For form handling
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"; // For map integration
import "leaflet/dist/leaflet.css"; // Map styling
import L from "leaflet"; // Leaflet icon handling
import HEADER from "../../component/header";
import Footer from "../../component/footer";
import "./addWorkspace.css"; // Add custom styles

// Fix Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const AddWorkspace = () => {
  const { register, handleSubmit, reset } = useForm(); // Form handling
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState([36.81897, 10.16579]); // Default location (Tunis, Tunisia)

  // Handle photo uploads
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  // Handle map click to set location
  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        setLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  // Submit form data
  const onSubmit = (data) => {
    const workspaceData = {
      ...data,
      photos,
      location,
    };
    console.log("Workspace Data:", workspaceData);
    alert("Workspace added successfully!");
    reset(); // Clear the form
    setPhotos([]);
  };

  useEffect(() => {
    // Add a specific class to the body for background
    document.body.classList.add('add-background');
    return () => {
      document.body.classList.remove('add-background'); // Cleanup when leaving the page
    };
  }, []);

  return (
    <div>
      <HEADER />
      <div className="add-workspace-container">
        <h2>Add a Workspace</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="workspace-form">
          <div className="form-group">
            <label htmlFor="name">Workspace Name</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter workspace name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Workspace Type</label>
            <select id="type" {...register("type", { required: true })}>
              <option value="Private Office">Private Office</option>
              <option value="Shared Workspace">Shared Workspace</option>
              <option value="Meeting Room">Meeting Room</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              placeholder="Describe the workspace..."
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (DT/month)</label>
            <input
              id="price"
              type="number"
              {...register("price", { required: true })}
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="photos">Photos</label>
            <input
              id="photos"
              type="file"
              multiple
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>

          <div className="form-group">
            <label>Set Location</label>
            <MapContainer
              center={location}
              zoom={13}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapClickHandler />
              <Marker position={location} />
            </MapContainer>
            <p>
              Current Location: {location[0]}, {location[1]}
            </p>
          </div>

          <button type="submit" className="btn-submit">
            Add Workspace
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddWorkspace;
