import AddBuilding from "../components/Popup/AddBuilding";
import Building from "../components/Building";
import { FunnelIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

export default function Meter() {
  const tabsData = [
    {
      label: "Electrical Fee",
      value: "efee",
    },
    {
      label: "Water Fee",
      value: "wfee",
    },
  ];

  const TABLE_HEAD = [
    "Room No.",
    "Unit (Last Month)",
    "Unit (This Month)",
    "Used Units",
  ];

  const TABLE_ROWS = [
    {
      roomno: "101",
      pastunit: "500",
      presentunit: "600",
      usedunit: "100",
    },
    {
      roomno: "102",
      pastunit: "500",
      presentunit: "600",
      usedunit: "100",
    },
    {
      roomno: "103",
      pastunit: "500",
      presentunit: "600",
      usedunit: "100",
    },
    {
      roomno: "104",
      pastunit: "500",
      presentunit: "600",
      usedunit: "100",
    },
    {
      roomno: "105",
      pastunit: "500",
      presentunit: "600",
      usedunit: "100",
    },
  ];

  return (
    <div className="mx-5 md:mx-10 mt-5 mb-10">
      <p className="font-bold">All Building</p>

      <div className="flex justify-between items-center">
        <div className="w-80 mt-5">
          <Tabs value="efee">
            <TabsHeader>
              {tabsData.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
        <Button className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload Files
        </Button>
      </div>
      <div className="px-5 mt-5 border rounded-lg overflow-auto">
        <p className="font-bold my-5">2023 December</p>
        <table className="w-full min-w-max table-auto text-center mb-5 ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ roomno, pastunit, presentunit, usedunit }) => (
              <tr key={roomno} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    {roomno}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    {pastunit}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    <input className="w-48 h-8 border rounded p-2" />
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal"
                  >
                    {usedunit}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-5">
        <Button>Save</Button>
      </div>
    </div>
  );
}
