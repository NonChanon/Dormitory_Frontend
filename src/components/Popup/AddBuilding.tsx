import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function AddBuilding() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <Icon icon="simple-line-icons:plus" onClick={handleOpen} />
      <Dialog open={open} handler={handleOpen} className="p-4">
        <DialogHeader>Create new building</DialogHeader>
        <DialogBody className="py-0 ">
          <p>You need to enter the code for create your dormitory.</p>
          <div className="w-full my-6 flex items-center">
            <p className="w-[250px] text-black">Building name</p>
            <Input label="Building name" />
          </div>
          <div className="w-full my-6 flex items-center">
            <p className="w-[250px] text-black">Storied building</p>
            <Input label="Storied building" />
          </div>
          <div className="w-full my-6 flex items-center">
            <p className="w-[250px] text-black">Number of rooms</p>
            <Input label="Number of rooms" />
          </div>
        </DialogBody>
        <DialogHeader>Room details</DialogHeader>
        <DialogBody className="py-0 ">
          <p>Set room default for the fist time. You can be edited later.</p>

          <div className="w-full my-6 flex items-center">
            <p className="w-[200px] text-black">Room fee</p>
            <Input label="Room fee" />
          </div>
          <div className="w-full my-6 flex items-center">
            <p className="w-[200px] text-black">Furniture fee</p>
            <Input label="Furniture fee" />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="filled" className="bg-black" onClick={handleOpen}>
            <span>Continue</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
