import {
  BG_FILL,
  BG_OPACITY,
  BORDER_COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
} from "@/constants/public-assets";

export const DataPage = ({
  children,
  heading = "",
  techs = [],
  projects = [],
  languages = [],
}) => {
  return (
    <div
      className={`flex flex-col align-evenly items-center justify-evenly mx-6 ${BORDER_RADIUS} ${BORDER_COLOR} ${BORDER_WIDTH} ${BG_FILL} ${BG_OPACITY}`}
    >
      <div className="container flex justify-center">
        <h1 className="text-4xl font-bold text-center text-teal-400 hover:text-teal-100">
          {heading}
        </h1>
      </div>
      <div className="container flex justify-center">{children}</div>
    </div>
  );
};
