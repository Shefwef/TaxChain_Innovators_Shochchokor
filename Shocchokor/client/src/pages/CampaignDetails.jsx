import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate("/");
    setIsLoading(false);
  };

  return (
    <div className="p-6 bg-clearm " style={{ backgroundColor: "#f8f1d1" }}>
      {isLoading && <Loader />}

      <div className="w-full flex flex-col md:flex-row gap-8 mt-10">
        {/* Campaign Image Section */}
        <div className="flex-1">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="relative w-full h-[6px] bg-gray-700 mt-3 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-green-500 rounded-full"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
              }}
            />
          </div>
        </div>

        {/* Count Box Section */}
        <div className="flex flex-col md:w-[200px] w-full gap-6">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      {/* Campaign Details Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Creator Section */}
          <div>
            <h4 className="text-xl font-semibold text-Black uppercase">
              Creator
            </h4>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-black">{state.owner}</h4>
                <p className="text-xs text-gray-400">10 Campaigns</p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div>
            <h4 className="text-xl font-semibold text-black uppercase">Story</h4>
            <p className="mt-4 text-sm text-black leading-6 text-justify">
              {state.description}
            </p>
          </div>

          {/* Donators Section */}
          <div>
            <h4 className="text-xl font-semibold text-black uppercase">
              Donators
            </h4>
            <div className="mt-4 space-y-3">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
                  >
                    <p className="text-sm text-white">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="text-sm text-black">{item.donation}</p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[350px] bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-center text-gray-400">
            Fund the project
          </p>
          <input
            type="number"
            placeholder="ETH 0.1"
            step="0.01"
            className="w-full mt-6 p-3 bg-gray-800 text-white rounded-lg outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
              Back it because you believe in it.
            </h4>
            <p className="text-xs text-gray-400 mt-2">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>
          <CustomButton
            btnType="button"
            title="Fund Campaign"
            styles="w-full mt-4 bg-purple-600 hover:bg-purple-700"
            handleClick={handleDonate}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
