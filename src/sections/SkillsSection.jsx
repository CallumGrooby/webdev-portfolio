import backgroundBlob2 from "../assets/blobs/blob2.png";
import { Blob } from "../ultilies/Blob";

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
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      name: "Sass",
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
      <Blob
        image={backgroundBlob2}
        maxHeight={"200px"}
        maxWidth={"200px"}
        // position={`top-0 left- transform -translate-x-1/2 -translate-y-1`}
        position={` top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2`}
      />

      <div className="container mx-auto flex flex-col items-center my-4">
        <header className="my-8">
          <h1 className="font-Exo text-5xl font-bold">My Tech Stack</h1>
        </header>

        <div className="flex gap-4 justify-center ">
          {techStack.map((stackItem, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <img
                  className="h-full w-full max-w-20 max-h-20"
                  src={stackItem.icon}
                  alt={stackItem.name}
                />
                <h3 className="text-center text-xl">{stackItem.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
