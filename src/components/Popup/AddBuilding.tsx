import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useToggle } from "../../hooks/useToggle";

export default function AddBuilding() {
  const { status: isOpen, toggleStatus: setIsOpen } = useToggle();

  return (
    <div>
      <PlusCircleIcon
        width={26}
        onClick={setIsOpen}
        className="cursor-pointer"
      />
      <Dialog open={isOpen} handler={setIsOpen} className="p-4">
        <DialogHeader>Create new building</DialogHeader>
        <DialogBody>
          <p>You need to enter the code for create your dormitory.</p>
          <div className="my-6 flex items-center">
            <p className="w-[200px] text-black">Building name</p>
            <Input
              label="Building name"
              containerProps={{ className: "max-w-[400px]" }}
            />
          </div>
          <div className="my-6 flex items-center">
            <p className="w-[200px] text-black">Storied building</p>
            <Input
              label="Storied building"
              containerProps={{ className: "max-w-[400px]" }}
            />
          </div>
          <div className="my-6 flex items-center">
            <p className="w-[200px] text-black">Number of rooms</p>
            <Input
              label="Number of rooms"
              containerProps={{ className: "max-w-[400px]" }}
            />
          </div>
        </DialogBody>
        <DialogHeader>Room details</DialogHeader>
        <DialogBody className="py-0 ">
          <p>Set room default for the fist time. You can be edited later.</p>

          <div className="my-6 flex items-center">
            <p className="w-[200px] text-black">Room fee</p>
            <Input
              label="Room fee"
              containerProps={{ className: "max-w-[400px]" }}
            />
          </div>
          <div className="my-6 flex items-center">
            <p className="w-[200px] text-black">Furniture fee</p>
            <Input
              label="Furniture fee"
              containerProps={{ className: "max-w-[400px]" }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="filled" className="bg-black" onClick={setIsOpen}>
            <span>Continue</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
