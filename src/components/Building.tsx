import {
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";

const tabsData = [
  {
    label: "Room details",
    value: "detail",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Lease",
    value: "lease",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Payment history",
    value: "payment",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Report history",
    value: "report",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];
const room = [
  {
    roomno: "room 101",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 102",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 103",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 104",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 105",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 106",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 107",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
];

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
    <div className="flex justify-between">
      <div className="border-2 px-5 py-1 rounded-md w-[70%]">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`font-Montserrat text-base ${
              open === 1 ? "" : "border-b-0"
            }`}
          >
            Building A
          </AccordionHeader>
          <AccordionBody className="flex flex-wrap border-b-[1px]">
            {room.map((r) => (
              <div className="border-2 w-fit p-4 m-2 rounded-md">
                <span>{r.roomno}</span>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </div>
      <Card
        color="transparent"
        shadow={false}
        className="border-2 px-5 py-5 rounded-md w-[29%]"
      >
        <div className="flex justify-between items-center">
          <Typography variant="h6" color="black">
            Room 101
          </Typography>
          <div className="flex ">
            <PencilSquareIcon width={22} className="cursor-pointer" />
            <TrashIcon width={20} className="ml-4 cursor-pointer" />
          </div>
        </div>
        <Tabs value="detail">
          <TabsHeader className="mt-5">
            {tabsData.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-sm py-2">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabsData.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        {/* <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form> */}
      </Card>
    </div>
  );
}
