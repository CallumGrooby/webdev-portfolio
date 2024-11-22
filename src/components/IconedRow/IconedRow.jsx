import React from "react";

const IconedList = ({ className, icons, hasMaxWidth = false }) => {
  console.log(icons);
  const Line = () => {
    return <span className="block h-[2px] grow bg-grey"></span>;
  };

  return (
    <section
      className={`flex flex-row gap-2 justify-end container-sm mx-auto w-full ${className}`}
    >
      <section
        className={`flex flex-row gap-2 justify-center items-center px-4 w-full ${
          hasMaxWidth ? "max-w-[720px]" : "container mx-auto"
        }`}
      >
        <Line />

        <ul
          className={`grid gap-4 
        ${icons.length === 3 ? "grid-cols-3" : "grid-cols-3"}`}
        >
          {icons.map((icon, index) => (
            <a
              key={index}
              className={`flex justify-center items-center bg-red aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-lg ${
                icon.onClick &&
                "transition-colors duration-500 hover:bg-[#FF7D86]"
              }`}
              href={icon.onClick}
              target="_blank"
            >
              {/* <img className="p-4" src={icon.icon} /> */}
              <div className="p-4 w-full h-full">{icon.iconSVG}</div>

              {/* Add content inside the square if needed */}
            </a>
          ))}
        </ul>

        <Line />
      </section>
    </section>
  );
};

export default IconedList;
