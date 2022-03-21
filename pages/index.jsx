import { MainAsideTemplate } from "../components/MainAsideTemplate";
import { ReturnToButton } from "../components/atoms/button/ReturnTopButton";
import { BookCard } from "../components/BookCard";
import { Layout } from "../components/Layout";
import { useState, useEffect, useCallback } from "react";
import { RadioGroup } from "@headlessui/react";

export default function SwrTests(props) {
  const {
    posts,
    error,
    articles,
    setArticles,
    knowledgeToggle,
    setKnowledgeToggle,
    healthToggle,
    setHealthToggle,
    timeToggle,
    setTimeToggle,
    philosophyToggle,
    setPhilosophyToggle,
    initialToggle,
    setInitialToggle,
    setCategoryFlag,
  } = props;

  const [plan, setPlan] = useState("全ての記事");

  const handleAllCategory = useCallback(() => {
    setArticles(posts?.contents);
    setKnowledgeToggle(false);
    setHealthToggle(false);
    setTimeToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts?.contents]);

  const handleSortedKnowledge = () => {
    const knowledgeArray = posts?.contents.filter((post) => post.category === "knowledge");
    setArticles(knowledgeArray);
    setHealthToggle(false);
    setTimeToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  };
  const handleSortedHealth = () => {
    const healthArray = posts?.contents.filter((post) => post.category === "health");
    setArticles(healthArray);
    setKnowledgeToggle(false);
    setTimeToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  };
  const handleSortedTime = () => {
    const timeArray = posts?.contents.filter((post) => post.category === "time");
    setArticles(timeArray);
    setKnowledgeToggle(false);
    setHealthToggle(false);
    setPhilosophyToggle(false);
    setInitialToggle(true);
  };
  const handleSortedPhilosophy = () => {
    const philosophyArray = posts?.contents.filter((post) => post.category === "philosophy");
    setArticles(philosophyArray);
    setKnowledgeToggle(false);
    setHealthToggle(false);
    setTimeToggle(false);
    setInitialToggle(true);
  };

  useEffect(() => {
    setArticles(posts?.contents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);
  useEffect(() => {
    setCategoryFlag("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (knowledgeToggle) {
      const knowledgeArray = posts?.contents.filter((post) => post.category === "knowledge");
      setArticles(knowledgeArray);
    } else if (healthToggle) {
      const healthArray = posts?.contents.filter((post) => post.category === "health");
      setArticles(healthArray);
    } else if (timeToggle) {
      const timeArray = posts?.contents.filter((post) => post.category === "time");
      setArticles(timeArray);
    } else if (philosophyToggle) {
      const philosophyArray = posts?.contents.filter((post) => post.category === "philosophy");
      setArticles(philosophyArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!error && !posts) return <div className="">ローディング中...</div>;
  if (error) return <div className="">エラーが発生したため、時間を置いて再度接続をお試しください。</div>;
  if (posts.length === 0) return <div className="">データは空です</div>;

  return (
    <Layout title="けやきのほんだな">
      <div className="flex justify-center mx-auto text-xs md:text-base lg:max-w-6xl ">
        <main className="flex flex-col w-full">
          <div className="flex w-full md:justify-around lg:py-3 lg:px-10 ">
            <RadioGroup
              value={plan}
              onChange={setPlan}
              className="flex flex-wrap justify-center items-center py-3 space-x-5 w-full h-24 md:justify-around md:h-12"
            >
              <RadioGroup.Option value="全ての記事">
                {({ checked }) => (
                  <button
                    className={
                      initialToggle === false && checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2 outline-none"
                        : "rounded border-[#000000c4] bg-opacity-80 px-4 py-2 outline-none hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none"
                    }
                    onClick={() => handleAllCategory()}
                  >
                    全ての記事
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="知識">
                {({ checked }) => (
                  <button
                    className={
                      knowledgeToggle || checked
                        ? "rounded bg-yellow-400 bg-opacity-80 text-white px-4 py-2 outline-none tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 outline-none hover:bg-yellow-400 hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedKnowledge()}
                  >
                    知識
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="健康">
                {({ checked }) => (
                  <button
                    className={
                      healthToggle || checked
                        ? "rounded bg-red-400 bg-opacity-80 text-white px-4 py-2 outline-none tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 outline-none hover:bg-red-400 hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedHealth()}
                  >
                    健康
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="時間">
                {({ checked }) => (
                  <button
                    className={
                      timeToggle || checked
                        ? "rounded bg-green-400 bg-opacity-80 text-white px-4 py-2 outline-none tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 outline-none hover:bg-green-400 hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedTime()}
                  >
                    時間
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="哲学・考え方">
                {({ checked }) => (
                  <button
                    className={
                      philosophyToggle || checked
                        ? "rounded bg-blue-400 bg-opacity-80 text-white px-4 py-2 outline-none"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 outline-none hover:bg-blue-400 hover:rounded hover:text-white hover:border-none"
                    }
                    onClick={() => handleSortedPhilosophy()}
                  >
                    哲学・考え方
                  </button>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>
          <div className="flex flex-wrap justify-center mt-4 md:justify-start md:mt-8 md:mb-16 lg:mr-14 lg:ml-10">
            {articles?.map((article) => (
              <BookCard key={article.id} bookData={article} />
            ))}
          </div>
        </main>
        <MainAsideTemplate />
      </div>

      {/* <ReturnToButton/> */}
    </Layout>
  );
}
