import Image from "next/image";

export const AboutAdmin = () => {
  return (
    <>
      <div className="relative w-60 h-auto  bg-white  border-t-2">
        <h3 className="pt-4 pl-3 font-bold text-left  ">このサイトについて</h3>
        <div className="absolute top-8 ml-3 w-[62%] border-b-8 border-green-500/40 "></div>
        <p className="py-4 px-3 text-sm leading-5 text-left ">
          管理人である<span className="font-bold"> 「かわゆー」 </span>
          が、読書を通じて得た「学び」や「気づき」を記事にして紹介していく書評ブログです。
        </p>
      </div>
      <div className="flex relative flex-col w-60 h-auto text-left  bg-white border-t-2">
        <h3 className="px-3 pt-4 font-bold text-left ">管理人</h3>
        <div className="absolute top-8 ml-3 w-[21%] border-b-8 border-green-500/40 "></div>

        <div className="flex flex-col items-center ">
          <div className="rounded-full  border-4 ">
            <Image src="/hornedOwl.png" width={160} height={160} className="py-16 w-40" alt="" />
          </div>
        </div>
        <h3 className="pt-2 pl-3">かわゆー</h3>
        <p className="p-3 text-sm">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
      </div>
    </>
  );
};
