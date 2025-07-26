import Image from "next/image"
import img2 from "../../public/background.png"

export default function Home() {
  return (
    <div>
      <Image
        src={img2}
        alt="Mama's Kitchen Cover"
        // layout="fill"
        objectFit="contain"
        quality={100}
        priority
        // width={300}
        className="relative w-full h-150"
      />
    </div>
  )
}