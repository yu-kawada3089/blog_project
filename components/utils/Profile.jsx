/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export const Profile = (props) => {
  return (
    <div className="leading-8 ">
      <div className="my-4 bg-gray-300/40 rounded">
        <div className="flex flex-col">
          <img src="/blockquote1.svg" className="block ml-2" width={32} height={32} alt="" />
          <div className="px-4 text-sm font-bold md:text-base">
            <blockquote>
              <div className="text-sm md:text-base">{props.profile}</div>
            </blockquote>
          </div>
          <img src="/blockquote2.svg" className="self-end mr-2 " width={32} height={32} alt="" />
        </div>
      </div>
      {props.description ? <div className="text-sm md:text-base">{props.description}</div> : null}
      {/* <div className="text-sm md:text-base">{props.description}</div> */}
    </div>
  );
};
