import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Login() {
  return (
    <div className="container flex items-center justify-center h-[90vh] mx-auto">
      <Card color="transparent" shadow={true} className="p-10">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Login
        </Typography>
        <form className="mt-8 mb-2 w-72">
          <div>
            <div className="flex flex-col gap-6">
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <Typography variant="small" className="mt-2 text-right">
              <a href="">Forgot password ?</a>
            </Typography>
          </div>
          <Button className="mt-6" fullWidth>
            Login
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Don't have an account ?{" "}
            <a href="#" className="font-bold text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
