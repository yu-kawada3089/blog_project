/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { Link as Scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";

import { DetailPageAsideTemplate } from "../../components/DetailPageAsideTemplate";
import { Layout } from "../../components/Layout";
import { Profile } from "../../components/utils/Profile";

export default function BlogId(props) {
  const router = useRouter();
  const { books, setKnowledgeToggle, setHealthToggle, setTimeToggle, setInitialToggle, categoryFlag, setCategoryFlag, setPhilosophyToggle } = props;
  console.log({ books });

  const htmlParsedIntroData = parse(books.intro);

  const htmlParsedRecommendData = parse(books.recommend);

  const htmlParsedChecklistData = parse(books.checklist);

  const htmlParsedProfileData = parse(books.profile);

  const htmlParsedDescriptionData = parse(books?.description);

  const htmlParsedImpressionData = parse(books.impression);

  console.log(categoryFlag);
  const [isShow, setIsShow] = useState(false);

  const handleDisplay = useCallback(() => setIsShow((isShow) => !isShow), []);

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

  const [ref1, introductionInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -0% 0%",
  });
  const [ref2, recommendationInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });
  const [ref3, checklistInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });
  const [ref4, impressionsInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });

  return (
    <Layout title={props.books.title}>
      <div className="flex justify-center mx-auto mt-6 space-x-20 max-w-full tracking-wider md:max-w-6xl">
        <main className="flex flex-col w-screen md:max-w-[68%]">
          <div className="flex flex-col h-auto text-sm lg:hidden lg:mt-16 ">
            <h3 className="pt-4 ml-2 text-xl font-bold">???????????????</h3>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <button
                className={
                  books.category === "knowledge"
                    ? "p-3 rounded bg-yellow-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-yellow-400 hover:text-gray-100"
                }
                onClick={handleIndexKnowledge}
              >
                ??????
              </button>
              <button
                className={
                  books.category === "health"
                    ? "p-3 rounded bg-red-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-red-400 hover:text-gray-100"
                }
                onClick={handleIndexHealth}
              >
                ??????
              </button>
              <button
                className={
                  books.category === "time"
                    ? "p-3 rounded bg-purple-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-purple-400 hover:text-gray-100"
                }
                onClick={handleIndexTime}
              >
                ??????
              </button>
              <button
                className={
                  books.category === "philosophy"
                    ? "p-3 rounded bg-blue-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-blue-400 hover:text-gray-100"
                }
                onClick={handleIndexPhilosophy}
              >
                ??????
              </button>
            </div>
          </div>
          <div className="pb-8 mt-4 mb-8 h-full bg-white border-2 lg:mt-16 ">
            <h1 className="mx-8 mt-8 font-bold text-center md:text-2xl lg:text-4xl">{books.title}</h1>
            <Image src={books.mainImage.url} width={800} height={600} className="object-fill justify-center m-auto mt-8 w-2/3 h-52 md:h-96" alt="" />
            <div className="grid grid-cols-6 grid-rows-6 w-80 h-auto bg-white lg:hidden">
              <h3 className="col-start-1 col-end-7 row-start-1 row-end-2 px-4 pt-4 mb-2 text-xl font-bold md:pl-10">??????</h3>
              <div className="col-start-1 col-end-2 row-start-2 row-end-7 justify-self-center md:pl-8">
                <img className={introductionInview ? "mt-5 pb-10" : "mt-5 pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={recommendationInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={checklistInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={impressionsInview ? "pb-9" : "pb-9 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
              </div>
              <ul className="col-start-2 col-end-7 row-start-2 row-end-7 md:pl-6">
                <li
                  className={
                    introductionInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="introduction" smooth={true} duration={400} offset={-68} className="cursor-pointer ">
                    ????????????
                  </Scroll>
                </li>
                <li
                  className={
                    recommendationInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="recommendation" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    ??????????????????????????????
                  </Scroll>
                </li>
                <li
                  className={
                    checklistInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="checklist" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    ???????????????????????????????????????
                  </Scroll>
                </li>
                <li
                  className={
                    impressionsInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="impressions" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    ?????????????????????????????????
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 md:px-10 md:pt-10" ref={ref1}>
              <div className="relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="introduction" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl">
                  ????????????
                </h2>
              </div>
              <div className="mt-8 text-sm leading-8 md:text-base ">{htmlParsedIntroData}</div>
            </div>
            <div className="px-4 mt-10 md:px-10 md:pt-10" ref={ref2}>
              <div className="relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="recommendation" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl ">
                  ??????????????????????????????
                </h2>
              </div>
              <div className="mt-8 font-noto text-sm leading-8 md:text-base">{htmlParsedRecommendData}</div>
            </div>
            <div className="px-4 mt-10 md:px-10 md:pt-10" ref={ref3}>
              <div className=" relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="checklist" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl ">
                  ???????????????????????????????????????
                </h2>
              </div>
              <div className="flex flex-row mt-8 text-sm leading-8 md:text-base">
                <ul className="mt-8 space-y-4">
                  <li>?????????</li>
                  <li>????????????</li>
                  <li>???????????????</li>
                  <li>?????????????????????</li>
                </ul>
                <div className="pl-12 mt-8 space-y-4 ">
                  {htmlParsedChecklistData}
                  <button className="px-3 leading-8 text-white bg-[#000000c4] rounded outline-none" onClick={handleDisplay}>
                    {isShow ? "?????????" : "??????"}
                  </button>
                  <span className="pl-10">(????????????)</span>
                </div>
              </div>
              {/* ?????????????????????????????????????????? */}
              {isShow ? <Profile profile={htmlParsedProfileData} description={htmlParsedDescriptionData} /> : null}
            </div>
            <div className="px-4 mt-10 md:px-10 md:pt-10" ref={ref4}>
              <div className="relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="impressions" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl ">
                  ?????????????????????????????????
                </h2>
              </div>
              <div className="mt-8 text-sm leading-8 md:text-base">{htmlParsedImpressionData}</div>
            </div>
          </div>
        </main>
        <DetailPageAsideTemplate
          introductionInview={introductionInview}
          recommendationInview={recommendationInview}
          checklistInview={checklistInview}
          impressionsInview={impressionsInview}
          category={books.category}
          setKnowledgeToggle={setKnowledgeToggle}
          setHealthToggle={setHealthToggle}
          setInitialToggle={setInitialToggle}
          categoryFlag={categoryFlag}
          setCategoryFlag={setCategoryFlag}
          setTimeToggle={setTimeToggle}
          setPhilosophyToggle={setPhilosophyToggle}
        />
      </div>
    </Layout>
  );
}
//???????????????????????????????????????
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch("https://keyakiblog.microcms.io/api/v1/blog-data", key);
  const blogData = await data.json();
  const paths = blogData.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: "blocking",
  };
};

//???????????????????????????????????????????????????????????????
export const getStaticProps = async (context) => {
  console.log({ context });
  let data;

  if (context.preview) {
    const slug = context.params?.id;
    const draftKey = context.previewData?.draftKey;

    data = await fetch(`https://keyakiblog.microcms.io/api/v1/blog-data/${slug}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`, {
      headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "" },
    }).then((res) => res.json());
  } else if (!context.preview) {
    const id = context.params.id;
    const key = {
      headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    };
    data = await fetch(`https://keyakiblog.microcms.io/api/v1/blog-data/` + id, key)
      .then((res) => res.json())
      .catch(() => null);
  }
  return {
    props: {
      books: data,
    },
    revalidate: 1,
  };
};
