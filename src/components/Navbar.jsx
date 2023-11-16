import React from "react";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";

const Navbar = () => { 
  const [state, setstate] = useState(false);
  const [mobilestate, setmobilestate] = useState(false);
  return (
    // <>
      <div class="min-h-full">
      <nav class="bg-green-600 fixed top-0 left-0 w-full z-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div
                class="flex-shrink-0 hover:cursor-pointer"
              >
                <img class="h-12 w-18" src="data:image/png;base64,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" alt="Your Company" />
              </div>
              <div class="hidden md:block text-right">
                <div class="mr-4 ml-24 space-x-4">
                  <a
                    href="/home"
                    class="text-white font-bold hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="/products"
                    class="text-white font-bold hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                     Products
                  </a>
                  <a
                    href="/about"
                    class="text-white font-bold hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/offer"
                    class="text-white font-bold hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Offers
                  </a>
                  <a
                    href="/cart"
                    class="text-white font-bold hover:bg-green-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="rounded-full bg-green-500 p-1 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="flex max-w-xs bg-green-100 items-center rounded-full text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setstate(!state)}
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://www.iconpacks.net/icons/3/free-green-person-icon-10777-thumb.png"
                        alt=""
                      />
                    </button>
                  </div>

                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                    style={{
                      display: state ? "flex" : "none",
                      flexDirection: "column",
                    }}
                  >
                    <a
                      href="/profile"
                      class="block px-4 py-2 text-base text-green-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >  
                    <span class="flex items-center">
                    <IoPersonOutline class="mr-2" /> Your Profile
                  </span>
                    </a>
                    <hr />
                    <a
                      href="/wallet"
                      class="block px-4 py-2 text-base text-green-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                     <span class="flex items-center">
                    <IoWalletOutline class="mr-2" />Wallet
                  </span>
                    </a>
                    <hr />
                    <a
                      href="/logout"
                      class="block px-4 py-2 text-base text-green-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                     <span class="flex items-center">
                     <IoMdLogIn class="mr-2" /> Log in
                  </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-green-800 p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setmobilestate(!mobilestate)}
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          class="md:hidden"
          id="mobile-menu"
          style={{
            display: mobilestate ? "flex" : "none",
            flexDirection: "column",
          }}
        >
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="/Home"
              class="bg-green-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/products"
              class="text-white font-bold hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
            Products
            </a>
            <a
              href="/about"
              class="text-white font-bold hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="/offer"
              class="text-white font-bold hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
            Offers
            </a>
            <a
              href="/cart"
              class="text-white font-bold hover:bg-green-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Cart
            </a>
          </div>
          <div class="border-t border-green-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              {/* <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div class="text-base font-medium leading-none text-green-400">
                  tom@example.com
                </div>
              </div> */}
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full bg-green-800 p-1 text-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a
                href="/profile"
                class="block rounded-md px-3 py-2 text-base font-medium text-green-400 hover:bg-green-700 hover:text-white"
              > 
              <span class="flex items-center justify-center text-white">
              <IoPersonOutline class="mr-2" /> Your Profile
            </span>
              </a>
              <a
                href="/wallet"
                class="block rounded-md px-3 py-2 text-base font-medium text-green-400 hover:bg-green-700 hover:text-white"
              >
                <span class="flex items-center justify-center text-white">
              <IoWalletOutline class="mr-2" />Wallet
            </span>
              </a>
              <a
                href="/logout"
                class="block rounded-md px-3 py-2 text-base font-medium text-green-400 hover:bg-green-700 hover:text-white"
              >
              <span class="flex items-center justify-center text-white">
              <IoMdLogIn class="mr-2" /> Log in
           </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
       
      </div>
    </main> */}
    </div>
  );
};

export default Navbar;
