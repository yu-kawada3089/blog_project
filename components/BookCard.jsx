/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Image from "next/image";
import Link from "next/link";

export const BookCard = ({ bookData }) => {
  // console.log(bookData);

  return (
    <Link href={`/blog/${bookData.id}`} passHref>
      <div className=" overflow-hidden overflow-y-auto relative mx-6 mb-8 w-64 h-80 text-gray-800 bg-opacity-20 rounded border-2 hover:border-[#0d0f0da1] shadow-xl transition-all duration-300 ease-in-out hover:rotate-3 hover:cursor-pointer md:w-72 md:h-96 lg:w-80">
        <Image src={bookData.mainImage.url} alt="" width={320} height={210} className="object-fill  w-full h-full bg-card-img" />
        <div className="flex bottom-0 z-50 flex-col justify-between p-2 w-full h-24 bg-white md:h-44">
          <div className="p-2 text-sm md:text-xl ">{bookData.title}</div>
          <div className="flex justify-between">
            <span className="px-2 text-sm text-gray-500">{bookData.date}</span>
            <span className="px-2 mb-4 text-sm ">{bookData.author}</span>
          </div>
          {/* <div className="p-2">{bookData.summary}</div> */}
        </div>
      </div>
    </Link>
  );
};
