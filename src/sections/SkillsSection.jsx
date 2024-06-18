import { Blob } from "../ultilies/Blob";
import lines from "../assets/Lines.png";
import backgroundBlob1 from "../assets/blobs/blob1.png";
import backgroundBlob2 from "../assets/blobs/blob2.png";
export const SkillsSection = () => {
  const techStack = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "Tailwind",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      name: "C#",
    },
  ];

  return (
    <section className="relative">
      <section className="container mx-auto w-full flex flex-col gap-4 items-center lg:items-end justify-center h-full p-4">
        <div className="flex flex-col max-w-[700px] w-full content-center items-center ">
          <header className="w-full my-8 text-purple-800 flex flex-col gap-4 text-start">
            <h1 className="font-Exo text-4xl">My Tech Stack</h1>
            <p className="text-xl text-purple-700">
              Technologies Ive been working with recently
            </p>
          </header>

          <div className=" grid grid-cols-3 grid-rows-2 gap-4 justify-center w-full ">
            {techStack.map((stackItem, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-full aspect-square justify-center bg-purple-800 rounded-2xl"
                >
                  <img
                    className="h-full w-full max-w-20 max-h-20"
                    src={stackItem.icon}
                    alt={stackItem.name}
                  />
                  <h3 className="text-center text-xl text-white">
                    {stackItem.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <img
        className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 -z-10"
        // className="absolute -z-10 left-0 top-full lg:top-0 w-full"
        src={lines}
        alt=""
        srcset=""
      />

      <Blob
        image={backgroundBlob1}
        maxHeight={"600px"}
        position={"transform -translate-x-1/2 -translate-y-0 left-[20px] top-0"}
      />

      <Blob image={backgroundBlob2} maxHeight={"400px"} position={"right-0"} />
    </section>
  );
};
