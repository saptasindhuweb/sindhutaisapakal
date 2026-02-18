import React from "react";

type AchievementVisualProps = {
  imageSrc: string;
  position: string;
};

const AchievementVisual: React.FC<AchievementVisualProps> = ({ imageSrc, position }) => {
  return (
    <div className="relative h-[300px] w-[140px]">

      <div
        className="absolute z-10 w-[280px] h-[200px] bg-[#FDE68A] p-1 rounded-lg shadow-2xl"
        style={{
          bottom: "100px",
          transform: "translateX(-50%)",
        }}
      >
        <div className="w-full h-full overflow-hidden bg-gray-200 rounded-md">
          <img
            src={imageSrc}
            alt="Achievement"
            className="w-full h-full scale-110"
            // style={{ objectPosition: position }}
          />
        </div>
      </div>

    </div>
  );
};

export default AchievementVisual;
