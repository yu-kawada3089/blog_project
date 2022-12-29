import Link from "next/link";
import Router from "next/router";

export const Pagination = ({ totalCount, articles, setArticles, devideNumber, knowledgeToggle, healthToggle, timeToggle, philosophyToggle }) => {
  const PER_PAGE = devideNumber;

  const pickOutArticles = [];
  console.log(knowledgeToggle, healthToggle, timeToggle, philosophyToggle);
  articles?.forEach((element) => {
    pickOutArticles.push(element.category);
  });
  console.log(totalCount);

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex justify-around p-4 my-4 mx-10 ml-5  ">
      {(pickOutArticles?.includes("knowledge") &&
        pickOutArticles?.includes("health") &&
        pickOutArticles?.includes("time") &&
        pickOutArticles?.includes("philosophy")) ||
      (knowledgeToggle === false && healthToggle === false && timeToggle === false && philosophyToggle === false)
        ? range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/page/top/${number}`}>
                <a className="px-4 text-xl text-gray-50 hover:text-black bg-black hover:bg-gray-50 rounded-md border-2 opacity-75">{number}</a>
              </Link>
            </li>
          ))
        : null}
      {knowledgeToggle && pickOutArticles.every((array) => array === "knowledge")
        ? range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/page/knowledge/${number}`}>
                <a className="px-4 text-xl text-gray-50 hover:text-yellow-400 bg-yellow-400 hover:bg-gray-50 rounded-md border-2 opacity-75">
                  {number}
                </a>
              </Link>
            </li>
          ))
        : null}
      {healthToggle && pickOutArticles.every((array) => array === "health")
        ? range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/page/health/${number}`}>
                <a className="px-4 text-xl text-gray-50 hover:text-red-400 bg-red-400 hover:bg-gray-50 rounded-md border-2 opacity-75">{number}</a>
              </Link>
            </li>
          ))
        : null}
      {timeToggle && pickOutArticles.every((array) => array === "time")
        ? range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/page/time/${number}`}>
                <a className="px-4 text-xl text-gray-50 hover:text-green-400 bg-green-400 hover:bg-gray-50 rounded-md border-2 opacity-75">
                  {number}
                </a>
              </Link>
            </li>
          ))
        : null}
      {philosophyToggle && pickOutArticles.every((array) => array === "philosophy")
        ? range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              <Link href={`/page/philosophy/${number}`}>
                <a className="px-4 text-xl text-gray-50 hover:text-blue-400 bg-blue-400 hover:bg-gray-50 rounded-md border-2 opacity-75">{number}</a>
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
};
