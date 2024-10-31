import React from 'react'

export const ContactSection = () => {
  return (
    <div className="min-h-40 md:min-h-60 w-[20rem] md:w-[50rem] font-poppins flex flex-col bg-crimson shadow-sm rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <h3 className="text-sm md:text-lg font-bold text-white">
          Contact Me
        </h3>
        <p className="mt-2 text-xs md:text-base text-center text-white">
          Let&apos;s work together on your next project
        </p>
        <div className="flex">
          {/* Instagram */}
          <a href="https://www.instagram.com/vexonor/" className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:text-white hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600">
            <div className="group relative inline-block">
              <button className="focus:outline-none">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-instagram transform size-7 md:size-10 transition-transform duration-300 hover:scale-125 hover:text-charcoal"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                  ></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-charcoal rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
              >Instagram</span>
            </div>

          </a>
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/shafiq-64511a30b" className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:text-white hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600">
            <div className="group relative inline-block">
              <button className="focus:outline-none">
                <svg x="0px" y="0px"
                  className="transform transition-transform size-10 md:size-14 duration-300 hover:scale-125 hover:text-charcoal"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-charcoal rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
              >Linkedin</span>
            </div>

          </a>
          {/* Github */}
          <a href="https://github.com/Vexonor" className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:text-white hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600">
            <div className="group relative inline-block">
              <button className="focus:outline-none">
                <svg x="0px" y="0px"
                  className="transform transition-transform duration-300 size-10 md:size-12 hover:scale-125 hover:text-charcoal"
                  fill="currentColor"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-charcoal rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
              >Github</span>
            </div>

          </a>
          {/* Email */}
          <a href="mailto:vexonordark@gmail.com" className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-white decoration-2 hover:text-white hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600">
            <div className="group relative inline-block">
              <button className="focus:outline-none">
                <svg x="0px" y="0px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300 size-10 md:size-12 hover:scale-125 hover:text-charcoal"
                  fill="currentColor"
                  viewBox="0 0 48 48">
                  <path d="M 10.5 8 C 6.9280619 8 4 10.928062 4 14.5 L 4 33.5 C 4 37.071938 6.9280619 40 10.5 40 L 37.5 40 C 41.071938 40 44 37.071938 44 33.5 L 44 14.5 C 44 10.928062 41.071938 8 37.5 8 L 10.5 8 z M 10.5 11 L 37.5 11 C 39.450062 11 41 12.549938 41 14.5 L 41 15.605469 L 24 24.794922 L 7 15.605469 L 7 14.5 C 7 12.549938 8.5499381 11 10.5 11 z M 7 19.015625 L 23.287109 27.820312 A 1.50015 1.50015 0 0 0 24.712891 27.820312 L 41 19.015625 L 41 33.5 C 41 35.450062 39.450062 37 37.5 37 L 10.5 37 C 8.5499381 37 7 35.450062 7 33.5 L 7 19.015625 z"></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-charcoal rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
              >Email</span>
            </div>

          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;
