import Image from "next/image";
import img2 from "../../public/background.png";

export default function Home() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
      <Image
        src={img2}
        alt="Mama's Kitchen Cover"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
