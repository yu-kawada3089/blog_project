import { useCallback } from "react";
import { useRouter } from "next/router";

import { Link as Scroll } from "react-scroll";

export const DetailPageAsideTemplate = (props) => {
  const router = useRouter();
  console.log(props);

  const { setKnowledgeToggle, setHealthToggle, setTimeToggle, setInitialToggle, categoryFlag, setCategoryFlag, setPhilosophyToggle } = props;

  const handleIndexKnowledge = useCallback(() => {
    router.push("/");
    setCategoryFlag("knowledge");
    setKnowledgeToggle(true);
    setHealthToggle(false);
    setTimeToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  }, []);

  const handleIndexHealth = useCallback(() => {
    router.push("/");
    setCategoryFlag("health");
    setKnowledgeToggle(false);
    setHealthToggle(true);
    setTimeToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  }, []);

  const handleIndexTime = useCallback(() => {
    router.push("/");
    setCategoryFlag("time");
    setKnowledgeToggle(false);
    setHealthToggle(false);
    setTimeToggle(true);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  }, []);
  const handleIndexPhilosophy = useCallback(() => {
    router.push("/");
    setCategoryFlag("philosophy");
    setKnowledgeToggle(false);
    setHealthToggle(false);
    setTimeToggle(false);
    setPhilosophyToggle(true);
    setInitialToggle(true);
  }, []);

  return (
    <aside className="hidden lg:flex flex-col w-1/3 ">
      <div className="w-80 h-auto pb-8 border bg-white mt-16 rounded shadow-xl relative">
        <h3 className="text-xl font-bold pt-4 pl-8">カテゴリー</h3>
        <div className="border-b-8 border-green-500/40 w-[36%] ml-6 absolute top-8 "></div>

        <div className="grid grid-cols-2 mt-4 mx-6 gap-2">
          <button
            className={
              props.category === "knowledge"
                ? "rounded bg-yellow-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-yellow-400 hover:text-gray-100"
            }
            onClick={handleIndexKnowledge}
          >
            知識
          </button>
          <button
            className={
              props.category === "health"
                ? "p-3 rounded bg-red-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-red-400 hover:text-gray-100"
            }
            onClick={handleIndexHealth}
          >
            健康
          </button>
          <button
            className={
              props.category === "time"
                ? "p-3 rounded bg-green-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-green-400 hover:text-gray-100"
            }
            onClick={handleIndexTime}
          >
            時間
          </button>
          <button
            className={
              props.category === "philosophy"
                ? "p-3 rounded bg-blue-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-blue-400 hover:text-gray-100"
            }
            onClick={handleIndexPhilosophy}
          >
            哲学・考え方
          </button>
        </div>
      </div>
      <div className="sticky top-0">
        <div className="w-80 h-auto border grid grid-cols-6 grid-rows-6 mt-16 bg-white rounded shadow-xl relative">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-7 text-xl pt-4 pl-8 mb-2 font-bold">目次</h3>
          <div className="border-b-8 border-green-500/40 w-[19%] ml-6 absolute top-8 "></div>

          <div className="row-start-2 row-end-7 col-start-1 col-end-2 justify-self-center">
            <img className={props.introductionInview ? "mt-5 pb-10" : "mt-5 pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.recommendationInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.checklistInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.impressionsInview ? "pb-9" : "pb-9 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
          </div>
          <ul className="row-start-2 row-end-7 col-start-2 col-end-7">
            <li
              className={
                props.introductionInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="introduction" smooth={true} duration={400} offset={-68} className="cursor-pointer ">
                はじめに
              </Scroll>
            </li>
            <li
              className={
                props.recommendationInview
                  ? "py-4 hover:underline font-bold"
                  : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="recommendation" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                こんな方にオススメ！
              </Scroll>
            </li>
            <li
              className={
                props.checklistInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="checklist" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                読む前におさえたいポイント
              </Scroll>
            </li>
            <li
              className={
                props.impressionsInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="impressions" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                読んだ感想、気づきなど
              </Scroll>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-80 h-auto border-2 bg-white mt-16 rounded shadow-xl relative">
          <h3 className="pt-4 pl-8 text-xl font-bold ">管理人</h3>
          <div className="border-b-8 border-green-500/40 w-[25%] ml-6 absolute top-8 "></div>

          <div className="flex flex-col items-center ">
            <div className="w-40 py-16 m-2 border bg-white rounded-full text-center ">イメージ</div>
          </div>
          <h3 className="pt-2 pl-8">かわゆー</h3>
          <p className="p-5 pl-8">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
        </div>
      </div>
    </aside>
  );
};
