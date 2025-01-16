import React, { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import Header from '../components/Header';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
   
    const navigate = useNavigate();

    




    

    return (
        <div className="min-h-screen bg-cream px-4" style={{ backgroundColor: "#f8f1d1" }}>
            <Header />
            
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
                
                {/* Action Buttons */}
                <div className="gap-8 mb-8">
                    
                    <button className="bg-darkGreen text-teal-900 py-2 px-4 rounded-lg shadow-md">Add New User</button>
                    <button className="bg-darkGreen text-teal-900 py-2 px-4 rounded-lg shadow-md">Admin Settings</button>
                </div>

                {/* Additional Links Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <Link
                        to="/explore-projects"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        Add Approved Project    
                    </Link>
                    <Link
                        to="/create-campaign"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        Propose New Project
                    </Link>
                    <Link
                        to="/view-contributions"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        View/Edit Projects
                    </Link>
                    <Link
                        to="/community-stories"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        Community Stories
                    </Link>
                    <Link
                        to="/rewards"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        View User Details
                    </Link>
                    <Link
                        to="/create-campaign"
                        className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
                    >
                        View Leader-Board
                    </Link>
                </div>

                
            </div>
        </div>
    );
};

export default AdminDashboard;
