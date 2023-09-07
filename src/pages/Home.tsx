import Imgslide from "../components/Imgslide";
import AddBuilding from "../components/Popup/AddBuilding";
import AddDorm from "../components/Popup/AddDorm";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="mx-10">
      <Imgslide />
      {/* <AddDorm /> */}
      <div className="flex my-4 items-center justify-between">
        <p>No Building</p>
        <div className="flex">
          <AddBuilding />
          <Button className="ml-4">Edit</Button>
          <Button className="ml-4">Filter</Button>
        </div>
      </div>
    </div>
  );
}
