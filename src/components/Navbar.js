import React, { useState } from "react";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const onToggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <div class="w-full  text-white bg-[#2F302C] dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            <Logo />
          </a>
          <MobileNavbar />

        </div>
        <nav class="flex-col flex-grow pb-4 md:pb-0 hidden lg:flex md:justify-end md:flex-row">
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold text-white  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-white  focus:bg-gray-200 focus:text-black focus:outline-none focus:shadow-outline"
            href="#"
          >
            HOME
          </a>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            ELECTRONICS
          </a>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            BOOKS
          </a>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            MUSIC
          </a>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            CLOTHING
          </a>
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            GAMES
          </a>
          <div class="relative" x-data="{ open: false }">
            <button
              onClick={onToggleDropDown}
              class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4  focus:text-blue-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>MORE</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {isDropDownOpen ? (
              <>
                <div
                  x-show="open"
                  class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                >
                  <div class="px-2 py-2 bg-[#2F302C] rounded-md shadow dark-mode:bg-gray-800">
                    <a
                      class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:bg-white hover:text-black  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      FURNITURE
                    </a>
                    <a
                      class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  hover:bg-white hover:text-black dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      ELECTRONICS
                    </a>
                    <a
                      class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600   hover:bg-white hover:text-black dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      TRAVEL
                    </a>
                    <a
                      class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600   hover:bg-white hover:text-black dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      BOTANICAL
                    </a>
                    <a
                      class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600   hover:bg-white hover:text-black dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      CATEGORY NAME
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900  border-gray-300 border-b outline-none bg-[#2F302C]  "
                placeholder="Search something"
                required
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
