import { useState, useEffect } from "react";
import "./DashboardContent.scss";
import { PiUsersBold } from "react-icons/pi";
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { GiOrganigram } from "react-icons/gi";
import { ImSwitch } from "react-icons/im";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

import Integrations from "../Integration/Integrations";

// import AddSkillsBtn from "../../Sections/AddSkillsModal/AddSkillsModal";
// import SkillsList from "../SkillsList/SkillsList";
import toast from "react-hot-toast";

const DashboardContent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [lengths, setLengths] = useState({
    cvList: 0,
    coverLetterList: 0,
    organisationList: 0,
    subscribersList: 0,
  });

  useEffect(() => {
    // Retrieve the items from local storage
    const storedEmail = localStorage.getItem("email");
    const storedUserImage = localStorage.getItem("userImage");
    const storedUsername = localStorage.getItem("username");
    const storedFname = localStorage.getItem("fname");
    const storedToken = localStorage.getItem("token");
    const storedUserID = localStorage.getItem("userID");

    setUserData({
      email: storedEmail,
      userImage: storedUserImage,
      username: storedUsername,
      fname: storedFname,
      token: storedToken,
      userID: storedUserID,
    });
  }, []);

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    const initials = names.map((name) => name.charAt(0)).join("");
    return initials.toUpperCase();
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://api-cv-builder.vercel.app/cv/list"),
          fetch("https://api-cv-builder.vercel.app/coverLetter/list"),
          fetch("https://api-cv-builder.vercel.app/organisation/list"),
          fetch("https://api-cv-builder.vercel.app/organisation/list"),
        ]);

        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        setLengths({
          cvList: data[0].data.length,
          coverLetterList: data[0].data.length,
          organisationList: data[0].data.length,
          subscribersList: data[0].data.length,
        });
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchApiData();
  }, []);

  const handleLogout = () => {
    toast.success("Loging out....");
    // Clear token from localStorage or sessionStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("fname");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("username");
    localStorage.removeItem("userImage");
    // Redirect to login page
    navigate("/Login");
  };

  return (
    <div className="DashboardContent">
      <div className="min-h-screen py-10 p-32">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-md font-light">Welcome back.</h1>
            <h2 className="text-3xl font-bold">Good Day, {userData.fname}.</h2>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineBell className="text-2xl text-gray-500" />
            <button onClick={handleLogout}>
              <ImSwitch className="text-2xl text-red-400" />
            </button>

            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-lg font-semibold text-black">
              {getInitials(userData.fname)}
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-20">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaFilePdf className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-3xl mt-3 font-semibold">{lengths.cvList}</h3>
            <p className="text-gray-700 font-bold">CV/Resume</p>
          </div>
          <div className="bg-blue-100  p-6 rounded-lg shadow-md flex flex-col items-center">
            <BsFileEarmarkMedicalFill className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-3xl mt-3 font-semibold">
              {lengths.coverLetterList}
            </h3>
            <p className="text-gray-700 font-bold">Cover Letter</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <PiUsersBold className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-3xl mt-3 font-semibold">
              {lengths.coverLetterList}
            </h3>
            <p className="text-gray-700 font-bold">Members</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <GiOrganigram className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-3xl mt-3 font-semibold">
              {lengths.organisationList}
            </h3>
            <p className="text-gray-700 font-bold">Organsation</p>
          </div>
        </div>

        <div className="flex justify-end items-center mb-8">
          {/* <h3 className="text-2xl font-semibold">Invoice</h3> */}
          <div className="flex gap-3">
            <Link
              to="/Projects/new"
              className="flex gap-3 text-sm bg-blue-500 text-white p-3 rounded-full px-6 shadow-lg"
            >
              <IoMdAddCircle className="text-lg" /> <span>Upload Projects</span>
            </Link>
            <Link
              to="/Testimony/new"
              className="flex gap-3 text-sm bg-blue-500 text-white p-3 rounded-full px-6 shadow-lg"
            >
              <IoMdAddCircle className="mr-2" /> Add Testimonials
            </Link>
            {/* <AddSkillsBtn /> */}
          </div>
        </div>
        {/* <div className="mt-10">
          <SkillsList />
        </div> */}

        <div className="mt-20">
          <Integrations />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
