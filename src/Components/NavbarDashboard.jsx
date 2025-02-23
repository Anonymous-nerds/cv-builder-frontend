// "use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";
// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import User from "../assets/logo.png";

const navigation = [
  { name: "Overview", href: "/dashboard" },
  { name: "Cv/Resume", href: "/resume" },
  { name: "Cover Letter", href: "/coverLetter" },
  { name: "AI", href: "/ai" },
  { name: "Organisation", href: "/organisation" },
  { name: "Settings", href: "/settings" },
];

export default function Nav() {
  // const [userData, setUserData] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   // Retrieve the items from local storage
  //   const storedEmail = localStorage.getItem("email");
  //   const storedUserImage = localStorage.getItem("userImage");
  //   const storedUsername = localStorage.getItem("username");
  //   const storedFname = localStorage.getItem("fname");
  //   const storedToken = localStorage.getItem("token");
  //   const storedUserID = localStorage.getItem("userID");

  //   setUserData({
  //     email: storedEmail,
  //     userImage: storedUserImage,
  //     username: storedUsername,
  //     fname: storedFname,
  //     token: storedToken,
  //     userID: storedUserID,
  //   });
  // }, []);

  // const handleLogout = () => {
  //   // Clear token from localStorage or sessionStorage
  //   localStorage.removeItem("token");
  //   // Redirect to login page
  //   history.push("/login");
  // };

  return (
    <div className="bg-transparent">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-black"
                style={{ fontSize: "12px" }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex gap-3 rounded-full border border-black p-1">
              <span className="py-2 px-1 text-sm" style={{ fontSize: "12px" }}>
                {/* {userData.fname} */}
                Anas Yakubu
              </span>
              <span className="px-1">
                <img
                  className="w-8 rounded-full"
                  // src={userData.userImage}
                  src={User}
                  alt="User"
                />
              </span>
            </div>
          </div>
        </nav>
        <hr className="bg-black" />
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fefefe] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src={Logo} alt="Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black 0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="w-[140px]">
                  <div className="flex gap-3 rounded-full border border-black p-1">
                    <span
                      className="py-2 px-1 text-sm"
                      style={{ fontSize: "12px" }}
                    >
                      {/* {userData.fname} */}
                      Anas Yakubu
                    </span>
                    <span className="px-1">
                      <img
                        className="w-8 rounded-full"
                        // src={userData.userImage}
                        src={User}
                        alt="User"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
