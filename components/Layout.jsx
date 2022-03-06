import Head from "next/head";
import Link from "next/link";

import { ModalContactForm } from "./ModalContactForm";
import { DropdownMenu } from "./DropdownMenu";

// サイト全体を通して共通する箇所
export const Layout = ({ title = "HP by Next.js", children }) => {
  return (
    <div className="font-mPlus min-h-screen bg-opacity-10 text-gray-800 bg-[#ecc39c] ">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/owl_icon.svg" />
      </Head>

      <header>
        <div className="flex justify-center items-center bg-hero-img h-20 md:h-32 w-full">
          <div className="flex justify-between lg:max-w-6xl w-[90%] ">
            <Link href="/">
              <a className="font-maru text-2xl md:text-5xl  text-[#252a29f5] my-auto lg:ml-16">けやきのほんだな</a>
            </Link>
            {/* スマホ上で表示される部分 */}
            <DropdownMenu />
            {/* pc上で表示される部分 */}
            <nav className="hidden lg:flex h-14 space-x-8  ">
              <Link href="/">
                <div className="hover:bg-gray-400  hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover:cursor-pointer px-3 py-2 rounded ">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <a>Home</a>
                </div>
              </Link>
              <Link href="/blog-detail">
                <div className="hover:bg-gray-400 hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover: cursor-pointer px-3 py-2 rounded">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <a>このブログについて</a>
                </div>
              </Link>
              {/* モーダルウィンドウでの問い合わせ機能 */}
              <ModalContactForm />
            </nav>
          </div>
        </div>
      </header>
      <div className="border-b-2 "></div>
      <div className="flex flex-1 justify-center items-center flex-col w-screen">{children}</div>

      <footer>
        <div className="flex flex-col justify-center h-20 w-auto bg-footer-img">
          <p className="text-white text-center">© 2021 けやきのほんだな</p>
        </div>
      </footer>
    </div>
  );
};
