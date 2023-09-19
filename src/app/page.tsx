import Image from "next/image";
import homeBg from "../images/home_bg.jpg";
import Header from "@/components/Header";

export default function Home() {
  return (
    // <main className="flex flex-col mt-2">
    //   <div className="flex-1">
    //     <Header />
    //   </div>
    //   <div className="flex-2">
    //     <Image
    //       src={homeBg} // Replace with the actual path to your image
    //       alt="Background Image"
    //       objectFit="cover"
    //       quality={100} // Adjust image quality as needed
    //       priority={true} // Preload image
    //     />
    //   </div>
    // </main>
    <div>
      <Header />
      <div className="relative h-[100vh]">
        <Image
          src={homeBg} // Replace with the actual path to your background image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <div className="absolute inset-0 flex justify-center items-center">
        </div>
      </div>
    </div>
  );
}
