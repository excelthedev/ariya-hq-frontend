import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="w-full bg-[linear-gradient(rgba(0,0,0,0.74),rgba(0,0,0,0.74)),url('/images/ariya-backdrop-image.jpg')] bg-no-repeat bg-cover bg-center h-[800px]">
        <div className="w-full h-full text-white px-24 py-12">
          <nav>
            <div className="flex item-center justify-between ">
              <div className="flex items-center gap-14 text-sm">
                <p className="text-2xl">Àrìyá</p>
                <ul className="flex items-center gap-6 text-[16px] font-medium">
                  <li className="flex items-center justify-center gap-1">
                    Find Vendor{" "}
                    <ChevronDown strokeWidth={1.5} size={30} className="mt-1" />
                  </li>
                  <li className="flex items-center justify-center gap-1">
                    Find User
                    <ChevronDown strokeWidth={1.5} size={30} className="mt-1" />
                  </li>
                  <li>Why Ariya</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-8 text-[16px] font-medium">
                <button>Login</button>
                <button className="bg-[#D0771E] py-3 px-10 rounded-lg ">
                  Get Started
                </button>
              </div>
            </div>
          </nav>

          <div className=" mt-[205px] flex items-center flex-col gap-16">
            <div className="flex items-center flex-col gap-4">
              <p className="text-center text-[74px] font-semibold  ">
                Event Planning Begins with Ariya
              </p>
              <p className="font-light text-2xl text-center w-[850px] leading-7">
                From choosing vendors and booking venues to designing
                save-the-dates, a free event website, a registry, and even your
                cake — Ariya supports you through it all.
              </p>
            </div>

            <div className="flex items-center gap-8 text-[16px] font-semibold">
              <button className="bg-[#D0771E] py-6 px-26 rounded-lg ">
                Find Vendors
              </button>
              <button className="text-[#D0771E] border-2 rounded-lg border-[#D0771E] py-6 px-26">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-[#000000] bg-[#F4EAE0] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl">Find Vendors For Every Event</p>
          <p className="text-[#64615f] text-xl">
            Discover top-rated pros for any budget, background and style.
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4 ">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4 ">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4 ">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
          <div className="bg-white px-4 py-6 rounded-lg shadow-[-8px_7px_#D0711E] flex items-start flex-col gap-4">
            <div className="rounded-full bg-[#FFBCBC] p-4">
              <Image
                src={"/icons/camera.png"}
                width={24}
                height={24}
                alt="camera_icon"
              />
            </div>
            <p className="text-black text-lg font-medium">Photographer</p>
          </div>
        </div>

        <div className="flex items-center justify-center text-white">
          <button className="bg-[#D0771E] py-6 px-26 rounded-lg">
            See All Vendors
          </button>
        </div>
      </section>

      <section className="text-[#000000] bg-[#F2F2F2] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl">Find Unforgettable Venues</p>
          <p className="text-[#64615f] text-xl">
            Get married at one of our most out-of-the-ordinary wedding venues.
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <p>djfjfjf</p>
        </div>

        <div className="flex items-center justify-center text-white">
          <button className="bg-[#D0771E] py-6 px-26 rounded-lg">
            See More Venues
          </button>
        </div>
      </section>

      <section className="w-full bg-[url('/images/everything-backdrop.jpg')] bg-no-repeat bg-cover bg-center h-[800px] flex items-center p-24 px-84">
        <div className="text-white text-8xl font-bold text-center leading-28 text-shadow-[12px_12px_#262626]">
          Everything <span className="text-[#d0771d]">you</span> need to plan
          <span className="text-[#d0771d]"> your</span> event with confidence
        </div>
      </section>

      <section className="text-[#000000] bg-[#C7D5D9] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl">Always By Your Side</p>
          <p className="text-[#64615f] text-xl">
            We are with you and by you through out!
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <p>djfjfjf</p>
        </div>

        <div className="flex items-center justify-center text-white">
          <button className="bg-[#D0771E] py-6 px-26 rounded-lg">
            See More Venues
          </button>
        </div>
      </section>

      <section className="text-[#000000] bg-[#D0391E] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl text-white">Create Event Website</p>
          <p className="text-white text-xl">
            Standout, be unique by creating website for your events
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <p>djfjfjf</p>
        </div>

        <div className="flex items-center justify-center text-white">
          <button className="bg-white py-6 px-26 rounded-lg">
            See More Websites
          </button>
        </div>
      </section>

      <section className="text-[#000000] bg-[#F4EAE0] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl text-[#262626]">
            Everybody Loves Us
          </p>
          <p className="text-[#262626] text-xl">
            Standout, be unique by creating website for your events
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <p>djfjfjf</p>
        </div>
      </section>

      <section className="text-[#000000] bg-[#262626] p-24 flex flex-col gap-18">
        <div className="flex items-center flex-col gap-2">
          <p className=" font-bold text-5xl text-white">Join Our Community</p>
          <p className="text-white text-xl">
            Connect with fellow event planners, share inspiration, and create
            lasting memories together.
          </p>
        </div>
        <div className="grid item-center justify-between grid-cols-4 gap-x-16 gap-y-16">
          <p>djfjfjf</p>
        </div>

        <div className="flex items-center justify-center text-[#262626]">
          <button className="bg-white py-6 px-26 rounded-lg">
            Join our community
          </button>
        </div>
      </section>
    </div>
  );
}
