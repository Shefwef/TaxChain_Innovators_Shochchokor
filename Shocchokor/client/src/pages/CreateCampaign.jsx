import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";
import { useStateContext } from "../context";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();

  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide a valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div className="font-sans min-h-screen p-8 bg-gradient-to-b from-[#f8f1d1] via-[#e8dcc1] to-[#e6d8b8] flex justify-center items-center text-teal-900">
      <div className="bg-white w-full max-w-4xl flex flex-col rounded-lg shadow-lg p-8 sm:p-10">
        {isLoading && (
          <div className="text-center text-lg text-teal-700 font-bold">
            Loading...
          </div>
        )}

        {/* Header */}
        <div className="flex justify-center items-center py-4 bg-teal-900 text-white rounded-lg mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Create a Project</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-wrap gap-6">
            <FormField
              labelName="Project Id *"
              placeholder="512"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange("name", e)}
            />
            <FormField
              labelName="Project Title *"
              placeholder="Write a title"
              inputType="text"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
          </div>

          <FormField
            labelName="Project Details *"
            placeholder="Write project description"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />

          <div className="w-full flex items-center p-6 bg-gradient-to-r from-teal-700 to-teal-500 rounded-lg text-white">
            <img src={money} alt="money" className="w-10 h-10 object-contain" />
            <h4 className="text-lg font-semibold ml-4">
              Your country's growth depends on your tax!
            </h4>
          </div>

          <div className="flex flex-wrap gap-6">
            <FormField
              labelName="Budget *"
              placeholder="ETH 0.50"
              inputType="text"
              value={form.target}
              handleChange={(e) => handleFormFieldChange("target", e)}
            />
            <FormField
              labelName="End Date *"
              placeholder="End Date"
              inputType="date"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange("deadline", e)}
            />
          </div>

          <FormField
            labelName="Project Image *"
            placeholder="Place image URL of your project"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />

          <div className="flex justify-center items-center mt-6">
            <CustomButton
              btnType="submit"
              title="Submit New Project"
              styles="bg-gradient-to-r from-teal-700 to-teal-500 py-3 px-6 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-transform hover:scale-105"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
