import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';


const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
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
    navigate('/');
    setIsLoading(false);
  };

  return (
    <div className="bg-[#f7f4e6] p-10 max-w-7xl mx-auto">
      {isLoading && <Loader />}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Image and Progress Bar */}
        <div className="flex-1 flex-col w-[120%]">
          <img
            src={state.image}
            alt="campaign"
            className="w-full max-w-[1400px] h-[400px] object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-teal-600"
              style={{
                width: `${calculateBarPercentage(state.target, state.amountCollected)}%`,
                maxWidth: '120%',
              }}
            ></div>
          </div>
        </div>

        {/* Campaign Stats with Logo */}
        <div className="flex flex-col lg:w-[10%] w-full flex-wrap justify-between gap-4 ">
          <div className="group hover:scale-110 transition-all duration-300 ease-in-out">
            <CountBox title="Days Left" value={remainingDays} />
          </div>
          <div className="group hover:scale-110 transition-all duration-300 ease-in-out">
            <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          </div>
          <div className="group hover:scale-110 transition-all duration-300 ease-in-out">
            <CountBox title="Total Backers" value={donators.length} />
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center mt-50 lg:mt-30 lg:w-[1%]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/1200px-Government_Seal_of_Bangladesh.svg.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
        </div>

      </div>

      <div className="mt-[60px] flex flex-col gap-10">

        {/* Creator Info */}
        <div className="flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-black break-all">{state.owner}</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Story</h4>
            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
            </div>
          </div>

          {/* Donators List */}
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">Donators</h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? donators.map((item, index) => (
                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                  <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                </div>
              )) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
              )}
            </div>
          </div>
        </div>

        {/* Fund Section */}
        <div className="mt-[20px] flex flex-col p-4 bg-[#fff0db] rounded-[10px]">
          <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#000000]">
            Fund the campaign
          </p>
          <div className="mt-[30px]">
            <input 
              type="number"
              placeholder="ETH 0.1"
              step="0.01"
              className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="my-[20px] p-4 bg-[#f8e0b1] rounded-[10px]">
              <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-black">Back it because you believe in it.</h4>
              <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Support the project for no reward, just because it speaks to you.</p>
            </div>
            <CustomButton 
              btnType="button"
              title="Fund Campaign"
              styles="w-full bg-teal-600"
              handleClick={handleDonate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;




