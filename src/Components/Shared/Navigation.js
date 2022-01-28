import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../Images/logo.webp";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  // custom hook
  const { user, logoutUser, admin } = useAuth();

  const navigate = useNavigate();

  const currentPath = window.location.pathname.split("/")[1];

  // navigate button handler here
  const handleAuthButton = () => {
    if (currentPath === "login") {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <button className="nav-link" onClick={() => navigate("/")}>
                      Home
                    </button>
                    <button
                      className="nav-link"
                      onClick={() => navigate("/blogs")}
                    >
                      Blogs
                    </button>
                    <button
                      className="nav-link"
                      onClick={() => navigate("/make-post")}
                    >
                      Make a Post
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user.email ? (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <p className="profile-link">{user?.displayName}</p>
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            className="profile-link"
                            onClick={() => navigate("/make-post")}
                          >
                            Make a Post
                          </button>
                        </Menu.Item>
                        {/* admin routes */}
                        {admin && (
                          <>
                            <Menu.Item>
                              <button
                                className="profile-link"
                                onClick={() => navigate("/make-admin")}
                              >
                                Make Admin
                              </button>
                            </Menu.Item>
                            <Menu.Item>
                              <button
                                className="profile-link"
                                onClick={() => navigate("/pending-posts")}
                              >
                                Pending posts
                              </button>
                            </Menu.Item>
                          </>
                        )}
                        <Menu.Item>
                          <button className="profile-link" onClick={logoutUser}>
                            Logout
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <button
                    className="btn-small text-white"
                    onClick={handleAuthButton}
                  >
                    {currentPath === "login" ? "Signup" : "Login"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="nav-link-res" onClick={() => navigate("/")}>
                Home
              </button>
              <button
                className="nav-link-res"
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </button>
              <button
                className="nav-link-res"
                onClick={() => navigate("/make-post")}
              >
                Make a Post
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
