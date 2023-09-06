import { Link } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

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

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <span className="normal-case mx-2 text-sm">Chanon Kitbunnadaech</span>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
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


export const Navbar = () => {
  const { status: isAuth, toggleStatus: setIsAuth } = useToggle();

  const Links = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "Invoice", path: "/invoice" },
    { name: "Management", path: "/management" },
  ];

  return (
    <div className="md:flex justify-between items-center shadow-md w-full md:h-[60px] px-5 text-base">
      <ul className="md:flex md:items-centers">
        {isAuth ? (
          Links.map((link) => (
            <li className="md:flex items-center px-5 my-5 md:my-0 font-semibold">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))
        ) : (
          <li className="md:flex items-center md:px-5">
            <Link to="/">Home</Link>
          </li>
        )}
      </ul>
      {isAuth ? (
        <div className="md:flex text-[26px]">
          <ProfileMenu />
        </div>
      ) : (
        <div className="md:flex px-5">
          <Button onClick={setIsAuth} >
            Log in
          </Button>
          <Button className="ml-5">Register</Button>
        </div>
      )}
    </div>
  );
};
