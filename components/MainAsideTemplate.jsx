import { AdminCard } from "./AdminCard";

export const MainAsideTemplate = () => {
  return (
    <aside className="lg:flex flex-col w-1/3 mt-6 hidden">
      <div className="w-80 h-auto border-2 mt-20 bg-white rounded shadow-xl relative">
        <h3 className="pt-4 pl-5 text-lg font-bold  ">このサイトについて</h3>
        <div className="border-b-8 border-green-500/40 w-[54%] ml-4 absolute top-8 "></div>
        <p className="py-4 px-3 pl-5 leading-6">
          管理人である<span className="font-bold">「かわゆー」</span>が、読書を通じて得た「学び」や「気づき」を記事にして紹介する書評ブログです。
        </p>
      </div>
      <AdminCard />
    </aside>
  );
};
