import Image from "next/image";
import SK from "../images/SK.png";

const Header = () => {
  return (
    <header className="bg-white flex">
      <div className="flex-1">
        <Image src={SK} alt="SK Jewellers" height={120} className="p-1 m-1"/>
      </div>
        <div className="flex-2">
            <p className="text-black p-8 mt-8">Call us at: +91989438188</p>
        </div>
    </header>
  );
};

export default Header;
