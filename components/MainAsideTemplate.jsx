import { AdminCard } from "./AdminCard";

export const MainAsideTemplate = () => {
  return (
    <aside className="hidden flex-col mt-6 w-1/3 lg:flex lg:mb-28">
      <div className="relative mt-20 w-80 h-auto bg-white rounded border-2 shadow-xl">
        <h3 className="pt-4 pl-5 text-lg font-bold  ">このサイトについて</h3>
        <div className="absolute top-8 ml-4 w-[54%] border-b-8 border-green-500/40 "></div>
        <p className="py-4 px-3 pl-5 leading-6">
          管理人である<span className="font-bold">「かわゆー」</span>が、読書を通じて得た「学び」や「気づき」を記事にして紹介する書評ブログです。
        </p>
      </div>
      <AdminCard />
    </aside>
  );
};
