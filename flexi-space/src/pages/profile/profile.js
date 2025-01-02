import React, { useState } from 'react';
import './Profile.css';
import { Link } from "react-router-dom";
import img from "../../images_videos/logo.png";
import Footer from '../../component/footer';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'Mohamed Salah',
    email: 'mohamed.salah@gmail.com',
    phone: '+216 25 855 621',
    memberSince: 'January 2024',
    avatar: '/salah.jfif',
  };

  const reservations = [
    {
      id: 1,
      space: 'Coworking Space - Paris Center',
      date: 'March 15, 2024',
      duration: '1 day',
      status: 'Confirmed',
    },
    {
      id: 2,
      space: 'Meeting Room - Lyon Business Center',
      date: 'March 22, 2024',
      duration: '4 hours',
      status: 'Upcoming',
    },
  ];

  return (
    <div>
      <header className="header">
        <nav className="nav">
          {/* Logo aligned to the left */}
          <div className="logo">
            <Link to="/">
              <img src={img} alt="Flexi-Space Logo" className="logo-image" />
            </Link>
          </div>
          {/* Centered navigation links */}
          <div className="nav-links">
            <Link to="/workspace">Workspaces</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog_et_ressource">Blog et Ressource</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center space-x-4 p-6 bg-gray-100">
            <img
              className="h-20 w-20 rounded-full border-4 border-white"
              src={user.avatar}
              alt={user.name}
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">Member since {user.memberSince}</p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex border-b mb-4">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 text-center p-2 ${
                  activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                }`}
              >
                <span className="inline-block mr-2">👤</span> Profile
              </button>
              <button
                onClick={() => setActiveTab('reservations')}
                className={`flex-1 text-center p-2 ${
                  activeTab === 'reservations' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                }`}
              >
                <span className="inline-block mr-2">📅</span> Reservations
              </button>
              <button
                onClick={() => setActiveTab('location')}
                className={`flex-1 text-center p-2 ${
                  activeTab === 'location' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                }`}
              >
                <span className="inline-block mr-2">📍</span> Locations
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-1 text-center p-2 ${
                  activeTab === 'settings' ? 'border-b-2 border-blue-500 text-blue-500' : ''
                }`}
              >
                <span className="inline-block mr-2">⚙️</span> Settings
              </button>
            </div>

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            )}

            {activeTab === 'reservations' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">My Reservations</h2>
                {reservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-4"
                  >
                    <div>
                      <h3 className="font-semibold">{reservation.space}</h3>
                      <p className="text-sm text-gray-600">
                        {reservation.date} • {reservation.duration}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        reservation.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'location' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Favorite Locations</h2>
                <p className="text-gray-500">No favorite locations yet.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <button className="w-full text-left p-2 border rounded-lg mb-2">
                  <span className="inline-block mr-2">✏️</span> Edit Profile
                </button>
                <button className="w-full text-left p-2 border rounded-lg mb-2">
                  <span className="inline-block mr-2">💳</span> Payment Methods
                </button>
                <button className="w-full text-left p-2 border rounded-lg text-red-500">
                  <span className="inline-block mr-2">🔓</span> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
