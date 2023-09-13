import { Link } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  PlusCircleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

// export const Navbar = () => {
//   const { status: isAuth, toggleStatus: setIsAuth } = useToggle();

//   const Links = [
//     { name: "Management", path: "/" },
//     { name: "Community", path: "/community" },
//     { name: "Turnover", path: "/turnover" },
//   ];

//   return (
//     <div className="md:flex justify-between items-center shadow-md w-full md:h-[60px] px-10">
//       <ul className="md:flex md:items-centers">
//         <li className="cursor-pointer mr-5">
//           <BuildingOffice2Icon width={30} height={30} />
//         </li>
//         {isAuth ? (
//           Links.map((link) => (
//             <li className="md:flex items-center px-5 my-5 md:my-0 font-semibold">
//               <Link to={link.path}>{link.name}</Link>
//             </li>
//           ))
//         ) : (
//           <li className="md:flex items-center md:px-5"></li>
//         )}
//       </ul>
//       {isAuth ? (
//         <div className="md:flex">
//           <PlusCircleIcon width={24} className="mr-5" />
//           <BellIcon width={24} className="mr-5" />
//           <ProfileMenu />
//         </div>
//       ) : (
//         <div className="md:flex">
//           <Button onClick={setIsAuth} variant="outlined">
//             Log in
//           </Button>
//           <Button className="ml-5">Register</Button>
//         </div>
//       )}
//     </div>
//   );
// };

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const Links = [
  { name: "Management", path: "/" },
  { name: "Community", path: "/community" },
  { name: "Turnover", path: "/turnover" },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full py-0.5 pr-0.5 pl-0.5 lg:ml-auto bg-gray-100 text-black"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <span className="normal-case mx-2 text-sm hidden md:block">
            Chanon Kitbunnadaech
          </span>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform hidden md:block mr-2 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { status: isAuth, toggleStatus: setIsAuth } = useToggle();

  const navList = (
    <ul className="my-4 flex flex-col gap-5 md:my-0 md:flex-row md:items-center">
      {isAuth ? (
        Links.map((li) => (
          <Typography as="li" color="black" className="px-0 md:px-5 font-bold">
            <a href="#" className="flex items-center">
              {li.name}
            </a>
          </Typography>
        ))
      ) : (
        <div />
      )}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-5 py-2 md:px-10 md:py-[9px] ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <BuildingOffice2Icon width={28} />
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        <div className="flex items-center">
          {isAuth ? (
            <div className="flex">
              <PlusCircleIcon width={24} className="mr-5" />
              <BellIcon width={24} className="mr-5" />
              <ProfileMenu />
            </div>
          ) : (
            <div className="flex">
              <Button onClick={setIsAuth} variant="outlined">
                Log in
              </Button>
              <Button className="ml-5">Register</Button>
            </div>
          )}
          {isAuth ? (
            <IconButton
              variant="text"
              className="ml-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          ) : (
            <div />
          )}
        </div>
      </div>
      {isAuth ? <MobileNav open={openNav}>{navList}</MobileNav> : <div></div>}
    </Navbar>
  );
}
