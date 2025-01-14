import React from "react";
import { Route, Routes } from "react-router-dom";


import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  DonatedCampaignsPage,
  Homepage,
  Chatbot_Assistant,
  Dashboard,
  SearchResults,
} from "./pages";

const App = () => {
  return (
    <div >
          
     
      <div >
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />{" "}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donated-campaigns" element={<DonatedCampaignsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/chatbot" element={<Chatbot_Assistant />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
