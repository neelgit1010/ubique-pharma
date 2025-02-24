import Image from "next/image"
import useElementHeight from "@/hooks/useElementHeight"
import { useEffect, useState } from "react"

const AboutSection = () => {
    const [rightSideHeight, leftSideRef] = useElementHeight();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const content =
      "Ubique embarked on its mission with a core commitment to enhancing health and well-being. Since our inception, we have dedicated ourselves to delivering high-quality, affordable medications Ubique embarked on its mission with a core commitment to enhancing Ubique embarked on its mission with a core commitment to enhancing health and well-being.";
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-4 xl:p-16 lg:p-8">
        <div
          className="md:w-[40%] w-full"
          style={{
            height: isSmallScreen ? "auto" : `${rightSideHeight}px`,
          }}
        >
          <Image
            src={"/images/about.jpeg"}
            alt={"about"}
            width={550}
            height={420}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-[60%] w-full flex flex-col gap-4 p-4" ref={leftSideRef}>
          <div>
            <h1 className="text-3xl font-bold text-defined-brown">
              About <span className="text-defined-green">Ubique Pharma</span>
            </h1>
            <p className="text-justify mt-4">{content}</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-defined-brown"> R&D
            </h1>
            <p className="text-justify mt-4">{content}</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-defined-brown">
              Vision
            </h1>
            <p className="text-justify mt-4">{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection