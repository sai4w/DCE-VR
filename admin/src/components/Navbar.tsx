import search from "@src/assets/icons/search.svg";
import calendar from "@src/assets/icons/calendar.svg";
import edit from "@src/assets/icons/edit.svg";
import message from "@src/assets/icons/message.svg";
import envelope from "@src/assets/icons/envelopeWhite.svg";
import bell from "@src/assets/icons/bell.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { avatars } from "@src/assets/avatar/avatar";
import email from "@src/assets/icons/email.svg";
import { ExitIcon } from "@radix-ui/react-icons";
import useUserStore from "@src/store/userStore";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="w-full flex items-center justify-between px-4 h-12 bg-[#0F3131]">
      <div className="flex items-center justify-center gap-2">
        <button className="size-8 flex justify-center items-center rounded-full bg-[#63797C]">
          <img src={calendar} alt="calendar" />
        </button>
        <button className="size-8 flex justify-center items-center rounded-full bg-[#63797C]">
          <img src={edit} alt="edit" />
        </button>
        <button className="size-8 flex justify-center items-center rounded-full bg-[#63797C]">
          <img src={message} alt="message" />
        </button>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-8 py-1 bg-transparent border border-white rounded text-white focus:outline-none"
          />
          <button className="absolute left-2">
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button className="size-8 flex justify-center items-center rounded-full bg-[#63797C]">
          <img src={envelope} alt="envelope" />
        </button>
        <button className="relative size-8 flex justify-center items-center rounded-full bg-[#63797C]">
          <img src={bell} alt="bell" />
          <span className="absolute -top-0.5 right-0 size-2.5 bg-[#00AB55] text-xs text-white flex items-center justify-center rounded-full animate-ping" />
          <span className="absolute z-10 -top-0.5 right-0 size-2.5 bg-[#00AB55] text-xs text-white flex items-center justify-center rounded-full animate-pulse" />
        </button>
        <Popover>
          <PopoverTrigger>
            <button className="size-8 flex justify-center items-center rounded-full">
              <img src={avatars[Number(user.avatar)]} alt="user" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={9}
            className="w-fit flex flex-col items-center justify-center p-0"
          >
            <div className="flex items-center p-4">
              <img
                src={avatars[Number(user.avatar)]}
                className="size-12 flex justify-center items-center rounded-3xl bg-white"
                alt="user"
              />
              <div className="flex flex-col justify-between">
                <p>
                  {user.firstname} {user.lastname}{" "}
                  <span className="text-xs rounded text-green-600 bg-green-100 px-2 py-px">
                    {user.type}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <button className="w-full flex gap-2 px-4 py-2 hover:bg-green-50">
              <img src={email} className="size-6" alt="profile" />
              <p>Profile</p>
            </button>
            <button
              className="w-full flex gap-2 px-4 py-2 hover:bg-red-50"
              onClick={() => (clearUser(), navigate("/"))}
            >
              <ExitIcon className="size-5" />
              <p>Logout</p>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
