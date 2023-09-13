import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Building() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <div className="border-2 px-5 py-1">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-Montserrat text-base"
        >
          Building A
        </AccordionHeader>
        <AccordionBody>
          <div className="border-[1px] w-fit p-4 rounded-md">
            <span>Room 101</span>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
