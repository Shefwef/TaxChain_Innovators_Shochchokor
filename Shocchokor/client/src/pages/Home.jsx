import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import Header from "../components/Header";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="bg-cream min-h-screen px-4" style={{ backgroundColor: "#f8f1d1" }}>
      <Header />

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* User Info Section */}
        

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-6">
          <Link
            to="/explore-projects"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Explore Projects
          </Link>
          <Link
            to="/pay-tax"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Pay Tax
          </Link>
          <Link
            to="/view-contributions"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            View My Contributions
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
            Rewards Earned
          </Link>
          <Link
            to="/new-project-proposals"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            New Project Proposals
          </Link>
        </div>

        {/* Campaigns Section */}
        <div className="bg-transparent shadow-lg rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-center mb-4">All Projects</h3>
          <DisplayCampaigns
            title="All Projects"
            isLoading={isLoading}
            campaigns={campaigns}
          />
        </div>

        {/* Impact Section */}
        <div className="bg-transparent shadow-lg rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-center">Your Impact So Far</h3>
          <div className="mt-4 text-center">
            <div className="text-3xl font-bold">5250 TK</div>
            <div className="bg-gray-300 rounded-full h-4 mt-4">
              <div
                className="bg-teal-900 rounded-full h-4"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
