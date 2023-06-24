import "flowbite";
import "./App.css";
import { motion } from "framer-motion"



const cityOptions = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Ranchi",
];

function App() {
  return (
    <>
      {/*------------------------------------------------------------------------------------------------------------ navbar ---------------------------------------------------------------------------------------------------------*/}

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*-------------------------------------------------------------------------------------------------------------------- hero ----------------------------------------------------------------------------------------------------*/}

      <section className="bg-white dark:bg-gray-100">
        <div className="container px-6 py-1 mx-auto text-center relative">
          <div className="flex justify-center mt-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-7/8"
              src="https://images.unsplash.com/photo-1600786288595-3dbb17cbbe66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Hero Image"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-lg mx-auto bg-stone-500 bg-opacity-25 p-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-80 h-15 px-4 py-2 bg-gray-100 sm:px-6 sm:py-3 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 mr-4"
                  />
                  <select className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white border border-gray-500 rounded-lg focus:outline-none focus:border-gray-500">
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 
------------------------------------------------------------------------------------------------------ cardssssssssss ----------------------------------------------------------------------------------------------------------------- */}





<section className='bg-white '>
				<div className='container px-6 py-10 mx-auto'>
					<h1 className='text-2xl font-semibold text-center text-cyan-300 capitalize lg:text-3xl dark:text-cyan-500'>
						Portfolio
					</h1>

					<p className='mt-4 text-center text-gray-500 dark:text-cyan-600'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
						quam voluptatibus
					</p>

					<div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
						<div
							className='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage:
									"url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687327759/roselyn-tirado-GDWmu0bFfS4-unsplash_cxlcg6.jpg')",
							}}
						>
							<div className='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 className='mt-4 text-xl font-semibold text-white capitalize'>
									Best website collections
								</h2>
								<p className='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									Website
								</p>
							</div>
						</div>

						<div
							className='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage:
									"url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687329112/annie-gray-WEWTGkPUVT0-unsplash_vvcm5n.jpg')",
							}}
						>
							<div className='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 className='mt-4 text-xl font-semibold text-white capitalize'>
									Block of Ui kit collections
								</h2>
								<p className='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									Ui kit
								</p>
							</div>
						</div>

						<div
							className='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage:
									"url('https://res.cloudinary.com/dcxnmagjx/image/upload/v1687327760/christopher-burns-8KfCR12oeUM-unsplash_m7whzi.jpg')",
							}}
						>
							<div className='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 className='mt-4 text-xl font-semibold text-white capitalize'>
									Ton’s of mobile mockup
								</h2>
								<p className='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									Mockups
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>


{/* 
---------------------------------------------------------------------------------------------------------------------stats------------------------------------------------------------------------------------------------------------ */}


<div className='bg-white py-20 sm:py-32'>
			<h2 className="max-w-4xl py-10 mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-gray-800 text-center">
					Trusted By The World’s Most<span className="text-sky-600"> Innovative Teams</span>
            </h2>
				
				
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					
				
					<div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>






					<motion.img
	whileHover={{ x: 10, y: -10 }}
	transition={{ duration: 0.5 }}
	className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
	src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
	alt='Transistor'
	width={158}
	height={48}
/>







<motion.img
	whileHover={{ x: 10, y: -10 }}
	transition={{ duration: 0.5 }}
	className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
	src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
	alt='Transistor'
	width={158}
	height={48}
/>

<motion.img
	whileHover={{ x: 10, y: -10 }}
	transition={{ duration: 0.5 }}
	className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
	src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
	alt='Transistor'
	width={158}
	height={48}
/>
				
<motion.img
	whileHover={{ x: 10, y: -10 }}
	transition={{ duration: 0.5 }}
	className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
	src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
	alt='Transistor'
	width={158}
	height={48}
/>
<motion.img
	whileHover={{ x: 10, y: -10 }}
	transition={{ duration: 0.5 }}
	className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
	src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
	alt='Transistor'
	width={158}
	height={48}
/>
				
					</div>
				</div>
			</div>







{/* 
------------------------------------------------------------------------------------------------------------------------ Cards -------------------------------------------------------------------------------------------------------------- */}




      <section className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-gray-800">
            Services You Need{" "}
            <span className="text-lime-600">at Super Fast Speed</span>
          </h2>

          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>

            

            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-5 rounded-xl shadow-lg mx-4 my-6 px-8 py-6 max-w-sm transform hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-10"></div>
                <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                  <img
                    src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687209069/ws_zffxox.png"
                    className="w-32"
                    alt="Logo"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Salon for Women
                  </h3>
                  <p className="text-gray-700">Additional details here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/*--------------------------------------------------------------------------------------------------------------------------- testimonial ------------------------------------------------------------------------------------------*/}























      {/*------------------------------------------------------------------------------------------------------------------- Footer -----------------------------------------------------------------------------------------------------*/}

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
