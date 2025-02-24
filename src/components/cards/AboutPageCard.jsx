import Image from "next/image"

const AboutPageCard = ({info}) => {
  return (
    <div className="w-[30%] border flex flex-col gap-4 justify-center items-center p-8 shadow-md rounded">
        <div className="w-[30%]">
            <Image src={"/about/human.png"}
            alt="human"
            width={500}
            height={500}
            className="h-auto w-full object-cover"
            ></Image>
        </div>
        <h1 className="text-defined-blue font-semibold text-2xl">{info.name}</h1>
        <p>{info.role}</p>
    </div>
  )
}

export default AboutPageCard