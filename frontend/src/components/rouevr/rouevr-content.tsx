import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import playstore from "@src/assets/icons/rouevr/playstore.svg";
import appstore from "@src/assets/icons/rouevr/appstore.svg";
import rouvr from "@src/assets/images/rouevr/rouevr.png";
export const RouevrContent = () => {
  return (
    <div className="container my-12 flex w-full flex-1 gap-16 py-4">
      <div className="flex w-full flex-col gap-12">
        <p className="text-7xl font-light">
          Get <span className="text-primary">ROUE VR</span> App
        </p>
        <p className="text-4xl font-light">
          We will send you a link, open it on your phone to download the app.
        </p>
        <RadioGroup defaultValue="option-one" className="flex gap-12">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one" className="text-3xl font-light">
              Phone
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two" className="text-3xl font-light">
              Email
            </Label>
          </div>
        </RadioGroup>
        <div className="flex w-full gap-4">
          <input
            placeholder="Your Phone Number"
            className="w-full appearance-none rounded-lg border border-stone-600 px-8 py-6 text-2xl placeholder:text-stone-700 focus:border-primary focus:outline-primary"
            onChange={(e) => {
              const newValue = e.target.value;
              if (/^\d{0,8}$/.test(newValue)) {
                e.target.value = newValue;
              }
            }}
            type="tel"
          />
          <button className="text-nowrap rounded-lg bg-primary px-8 py-3 text-3xl font-light text-white">
            Share App Link
          </button>
        </div>
        <p className="text-3xl font-light text-stone-600">Download App From</p>
        <div className="flex w-3/4 gap-4">
          <img src={playstore} alt="Playstore" className="size-full" />
          <img src={appstore} alt="Appstore" className="size-full" />
        </div>
      </div>
      <div className="flex w-full">
        <img src={rouvr} alt="Rouvr" className="size-full" />
      </div>
    </div>
  );
};
