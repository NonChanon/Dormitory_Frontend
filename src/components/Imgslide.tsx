import { Carousel, Typography } from "@material-tailwind/react";

export default function Imgslide() {
  return (
    <div>
      <Carousel className="h-[550px] w-auto">
        <div className="relative h-full w-full">
          <img
            src="https://www.hongpak.in.th/media/rooms/photos/22/0505/6273186263946.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center">
            <div className="w-3/4 text-center md:w-2/4 mt-[270px] bg-white p-5">
              <Typography
                variant="h1"
                color="black"
                className="mb-4 text-3xl md:text-4xl font-Montserrat font-extrabold"
              >
                Dormitory name
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="opacity-80  font-Montserrat text-xs"
              >
                66/223 Tippawan 3,Sukhumvit Road, Soi
                10,Banglamung,Nongprue,Chonburi20150
              </Typography>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
