import { Cross } from "lucide-react";
import React, { useState } from "react";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const onToggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <>
      <div class="relative lg:hidden" x-data="{ open: false }">
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
              class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg w-auto"
            >
              <div class="px-2 py-2 bg-[#2F302C] rounded-md shadow dark-mode:bg-gray-800">
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:bg-white hover:text-black  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  HOME
                </a>
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:bg-white hover:text-black  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  MUSIC
                </a>
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
    </>
  );
}

export default MobileNavbar;
