import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useToggle } from "../hooks/useToggle";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const { status: isAuth, toggleStatus: setIsAuth } = useToggle();

  const Links = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "Invoice", path: "/invoice" },
    { name: "Management", path: "/management" },
  ];

  return (
    <div className="md:flex justify-between items-center shadow-md w-full md:h-[50px] px-5 text-primary">
      <ul className="md:flex md:items-centers">
        {isAuth ? (
          Links.map((link) => (
            <li className="md:flex items-center px-5 my-5 md:my-0 font-bold">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))
        ) : (
          <li className="md:flex items-center md:px-5 font-bold">
            <Link to="/">Home</Link>
          </li>
        )}
      </ul>
      {isAuth ? (
        <div className="md:flex text-[26px]">
          <Icon icon="mingcute:user-4-fill" className="mx-5" />
          <Icon icon="mi:menu" className="mx-5" />
        </div>
      ) : (
        <div className="md:flex px-5">
          <Button variant={"white"} onClick={setIsAuth}>
            Log in
          </Button>
          <Button className="ml-5">Register</Button>
        </div>
      )}
    </div>
  );
};
