import {
  PencilIcon,
  PencilSquareIcon,
  PlusCircleIcon,
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
import TenantDetail from "./TenantDetail";
import RoomDetail from "./RoomDetail";
import Lease from "./Lease";
import PaymentHistory from "./PaymentHistory";
import Report from "./Report";

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
    roomno: "room 108",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 109",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 110",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 111",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 112",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 113",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 114",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 115",
    roomdetail: {
      roomfee: "3500",
      furniturefee: "1500",
    },
    tenantname: "Chanon Kitbunnadaech",
  },
  {
    roomno: "room 116",
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
      <div className="border-2 px-5 py-1 rounded-md w-[70%] h-fit">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`font-Montserrat text-base ${
              open === 1 ? "" : "border-b-0"
            }`}
          >
            Building A
          </AccordionHeader>
          <AccordionBody className="grid grid-cols-10">
            {room.map((r) => (
              <div className="flex border-2 m-2 h-14 rounded-md justify-center items-center">
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
            <TabPanel
              key={tabsData[0].value}
              value={tabsData[0].value}
              className="!px-0"
            >
              <TenantDetail />
            </TabPanel>
            <TabPanel
              key={tabsData[1].value}
              value={tabsData[1].value}
              className="!px-0"
            >
              <Lease />
            </TabPanel>
            <TabPanel
              key={tabsData[2].value}
              value={tabsData[2].value}
              className="!px-0"
            >
              <PaymentHistory />
            </TabPanel>
            <TabPanel
              key={tabsData[3].value}
              value={tabsData[3].value}
              className="!px-0"
            >
              <Report />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
}
