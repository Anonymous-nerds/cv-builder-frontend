// "use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/#About" },
  // { name: "Github", href: "https://github.com/anasyakubu", target: "_blank" },
  { name: "Resume", href: "/Resume" },
  { name: "Cover Letter", href: "/CoverLetter" },
  { name: "Blog", href: "https://blog-3-post.vercel.app/", target: "_blank" },
  { name: "FAQ", href: "/FAQ" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const handleLogout = () => {
  //   // Clear token from localStorage or sessionStorage
  //   localStorage.removeItem("token");
  //   // Redirect to login page
  //   history.push("/login");
  // };

  return (
    <div
      className="bg-transparent"
      // style={{ borderBottom: "0.2px solid #999" }}
    >
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <img className="h-16 w-auto" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#000]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-xl font-semibold leading-6 text-black"
                style={{ fontSize: "12px" }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/Login"
              className="p-2 px-5 text-sm bg-black rounded-sm m-2 icon"
              target="_blank"
              style={{ letterSpacing: "1px" }}
            >
              <span className="text-white">Start Building</span>
            </a>
            <a
              href="/Register"
              className="p-2 px-5 text-sm bg-transparent border border-black rounded-sm m-2 icon"
              target="_blank"
            >
              <span className="text-black">Register</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-16 w-auto" src={Logo} alt="Logo" />
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
                      target={item.target}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black 0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex lg:flex-1 lg:justify-end">
                  <a
                    href="/Login"
                    className="p-2 px-5 text-sm bg-black rounded-sm m-2 icon"
                    target="_blank"
                    style={{ letterSpacing: "1px" }}
                  >
                    <span className="text-white">Start Building</span>
                  </a>
                  <a
                    href="/Register"
                    className="p-2 px-5 text-sm bg-transparent border border-black rounded-sm m-2 icon"
                    target="_blank"
                  >
                    <span className="text-black">Register</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
