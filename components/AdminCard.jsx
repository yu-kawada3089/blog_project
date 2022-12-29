import Image from "next/image";

export const AdminCard = () => {
  return (
    <div className="flex relative flex-col mt-16 w-80 h-auto bg-white rounded border-2 shadow-xl">
      <h3 className="pt-4 pb-2 pl-5 text-lg font-bold">
        <span className=" ">管理人</span>
      </h3>
      <div className="absolute top-8 ml-4 w-[20%] border-b-8 border-green-500/40 "></div>
      <div className="flex flex-col items-center ">
        <div className="rounded-full  border-4 ">
          <Image src="/hornedOwl.png" width={200} height={200} className="py-16 w-40" alt="" />
        </div>
      </div>
      <h3 className="pt-2 pl-5">かわゆー</h3>
      <p className="p-5 ">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
    </div>
  );
};
