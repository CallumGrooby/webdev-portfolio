import React from "react";

const IconedList = ({ icons, hasMaxWidth = false }) => {
  const Line = () => {
    return <span className="block h-[2px] grow bg-grey"></span>;
  };

  return (
    <section className="flex flex-row gap-2 justify-end container-sm mx-auto w-full">
      <section
        className={`flex flex-row gap-2 justify-center items-center px-4 w-full ${
          hasMaxWidth ? "max-w-[720px]" : "container mx-auto"
        }`}
      >
        <Line />

        <ul
          className={`grid gap-4 
        ${icons.length === 3 ? "grid-cols-3" : "grid-cols-3 md:grid-cols-6"}`}
        >
          {icons.map((icon, index) => (
            <li
              key={index}
              className="flex justify-center items-center bg-red aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-lg"
            >
              {/* Add content inside the square if needed */}
            </li>
          ))}
        </ul>

        <Line />
      </section>
    </section>
  );
};

export default IconedList;
