export const AdminCard = () => {
  return (
    <div className="flex relative flex-col mt-16 w-80 h-auto bg-white rounded border-2 shadow-xl">
      <h3 className="pt-4 pl-5 text-lg font-bold ">管理人</h3>
      <div className="absolute top-8 ml-4 w-[20%] border-b-8 border-green-500/40 "></div>

      <div className="flex flex-col items-center ">
        <div className="py-16 m-2 w-40 text-center bg-white rounded-full border ">イメージ</div>
      </div>
      <h3 className="pt-2 pl-5">かわゆー</h3>
      <p className="p-5 ">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
    </div>
  );
};
