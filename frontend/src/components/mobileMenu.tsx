import { useState, useRef, useEffect } from "react";
interface MobileMenuProps {
  isMenuOpen: boolean;
}
const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  const [height, setHeight] = useState(0);
  const [isMeasured, setIsMeasured] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
      setIsMeasured(true);
    } else {
      setHeight(0);
      setIsMeasured(false);
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-x-2 overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
      style={{ height: isMeasured ? height : 0 }}
    >
      <div ref={contentRef}>azeaz</div>
    </div>
  );
};

export default MobileMenu;
