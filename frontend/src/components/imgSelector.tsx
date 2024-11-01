import tick from "@src/assets/icons/tick.svg";
interface ImgSelectorProps {
  img: string;
  fieldValue: string;
  i: string;
  setSelector: () => void;
  disabled?: boolean;
}
const ImgSelector = ({
  img,
  i,
  fieldValue,
  setSelector,
  disabled,
}: ImgSelectorProps) => {
  const isSelected = fieldValue === i;

  return (
    <button
      type="button"
      disabled={disabled}
      className={`relative h-fit w-fit focus:outline-none  ${
        isSelected ? "" : ""
      }`}
      onClick={() => setSelector()}
    >
      <img
        src={img}
        alt={`image${i}`}
        className={`${isSelected ? "brightness-50" : ""}`}
      />
      <img
        src={tick}
        alt={`image${i}`}
        className={`focus:outline-none ${
          isSelected
            ? "absolute left-0 top-0 z-10 size-16 h-full w-full fill-stone-100 brightness-100"
            : "hidden"
        }`}
      />
    </button>
  );
};

ImgSelector.displayName = "ImgSelector";
export { ImgSelector };
