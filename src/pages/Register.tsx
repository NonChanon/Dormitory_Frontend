import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";

export function Register() {
  return (
    <div className="container flex items-center justify-center h-[90vh] mx-auto">
      <Card color="transparent" shadow={true} className="p-10">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="flex items-center">
              Role
              <Radio name="type" label="Owner" className="w-5 h-5" />
              <Radio name="type" label="Employee" />
              <Radio name="type" label="Renter" />
            </div>
            <Input size="lg" label="Firstname" />
            <Input size="lg" label="Lastname" />
            <Input size="lg" label="Email" />
            <Input size="lg" label="Phone No." />
            <Input type="password" size="lg" label="Password" />
            <Input type="password" size="lg" label="Confirm Password" />
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
        </form>
      </Card>
    </div>
  );
}
