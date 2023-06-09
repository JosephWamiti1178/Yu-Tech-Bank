import React, { useState } from "react";
import { BiHome } from 'react-icons/bi';
import ProfilePage from "../../pages/profile/ProfilePage";

const DashboardNavbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-[#282828] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <p className='ml-6 flex flex-row items-center font-semibold text-white text-2xl'>Yutek <span className='text-red-500 ml-1 mr-1'>< BiHome size={50} /></span> Bank</p>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm w-1/4">
          <form>
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search property"
                className="bg-gray-100 rounded-md w-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.5 11a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
        <div className="ml-auto flex items-center">
          <img
            src="https://ir.propy.com/images/avatars/6421e871a9b697000184c5f2/be7bc556-93b6-4d6c-832c-78eaa433c019.jpg?width=50&amp;height=50&amp;scale=both&amp;mode=crop"
            alt="Profile"
            className="rounded-full w-10 h-10 object-cover mr-10"
            onClick={handleClick}
          />
          <button
            className="bg-white text-blue-500 rounded-md px-4 py-2 mt-4 lg:mt-0"
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
      </div>
      
    </nav>
{showProfile && <ProfilePage />}
</>
  );
};

export default DashboardNavbar;






// import React from "react";
// import { BiHome } from 'react-icons/bi';

// const DashboardNavbar = () => {
//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-[#282828] p-6">
//       <div className="flex items-center flex-shrink-0 text-white mr-6">
//         <span className="font-semibold text-xl tracking-tight">
//         <p className='ml-6 flex flex-row items-center font-semibold text-white text-2xl'>Yutek <span className='text-red-500 ml-1 mr-1'>< BiHome size={50} /></span> Bank</p>
//         </span>
//       </div>
//       <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//         <div className="text-sm  w-1/4">
//           <form>
//             <label htmlFor="search" className="sr-only">
//               Search
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 id="search"
//                 placeholder="Search property"
//                 className="bg-gray-100 rounded-md w-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500"
//               />
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   className="h-5 w-5 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-4.35-4.35"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15.5 11a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="ml-auto flex items-center">
//         <img src="https://ir.propy.com/images/avatars/6421e871a9b697000184c5f2/be7bc556-93b6-4d6c-832c-78eaa433c019.jpg?width=50&amp;height=50&amp;scale=both&amp;mode=crop" alt="Profile" className="rounded-full w-10 h-10 object-cover mr-10" />
//         <button className="bg-white text-blue-500 rounded-md px-4 py-2 mt-4 lg:mt-0">
//             Logout
//         </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default DashboardNavbar;
