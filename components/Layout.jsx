/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Head from "next/head";
import Link from "next/link";

import { ModalContactForm } from "./ModalContactForm";
import { DropdownMenu } from "./DropdownMenu";

// サイト全体を通して共通する箇所
export const Layout = ({ title = "HP by Next.js", children }) => {
  return (
    <div className="min-h-screen font-mPlus text-gray-800 bg-[#ecc39c] bg-opacity-10 ">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/owl_icon.svg" />
      </Head>

      <header>
        <div className="flex justify-center items-center w-full h-20 bg-hero-img md:h-32">
          <div className="flex justify-between w-[90%] lg:max-w-6xl ">
            <Link href="/">
              <a className="my-auto font-maru text-2xl  text-[#252a29f5] md:text-5xl lg:ml-16">けやきのほんだな</a>
            </Link>
            {/* スマホ上で表示される部分 */}
            <DropdownMenu />
            {/* pc上で表示される部分 */}
            <nav className="hidden space-x-8 h-14 lg:flex  ">
              <Link href="/" passHref>
                <div className="py-2 px-3 hover:text-gray-50 hover:bg-purple-500 hover:bg-opacity-50 rounded hover:shadow hover:cursor-pointer ">
                  <svg className="mx-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <Link href="/blog-detail" passHref>
                <div className="py-2 px-3 hover:text-gray-50 hover:bg-purple-500 hover:bg-opacity-50 rounded hover:shadow hover:cursor-pointer">
                  <svg className="mx-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <Link href="/portfolio" passHref>
                <div className="py-2 px-3 hover:text-gray-50 hover:bg-purple-500 hover:bg-opacity-50 rounded hover:shadow hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mx-auto w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>

                  <a>ポートフォリオ</a>
                </div>
              </Link>

              {/* モーダルウィンドウでの問い合わせ機能 */}
              <ModalContactForm />
            </nav>
          </div>
        </div>
      </header>
      <div className="border-b-2 "></div>
      <div className="flex flex-col flex-1 justify-center items-center w-screen">{children}</div>

      <footer>
        <div className="flex flex-col justify-center w-auto h-20 bg-footer-img">
          <p className="text-center text-white">© 2021 けやきのほんだな</p>
        </div>
      </footer>
    </div>
  );
};
