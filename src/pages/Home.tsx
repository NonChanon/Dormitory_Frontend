import { Icon } from "@iconify/react/dist/iconify.js";
import Imgslide from "../components/Imgslide";
import AddBuilding from "../components/Popup/AddBuilding";
import AddDorm from "../components/Popup/AddDorm";
import { Button } from "@material-tailwind/react";
import Building from "../components/Building";

export default function Home() {
  return (
    <div className="mx-10">
      <Imgslide />
      {/* <AddDorm /> */}
      <div className="flex my-4 items-center justify-between">
        <p>No Building</p>
        <div className="flex justify-center items-center text-xl">
          <AddBuilding />
          <Icon className="ml-6" icon="ri:edit-line" />
          <Icon className="ml-6" icon="lucide:filter" />
        </div>
      </div>
      <Building />
    </div>
  );
}
