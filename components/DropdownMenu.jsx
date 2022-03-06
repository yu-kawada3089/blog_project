import { Fragment, useState } from "react";
import { NextLink } from "./utils/NextLink";
import { Dialog, Transition } from "@headlessui/react";

import { ModalContactForm } from "./ModalContactForm";

export const DropdownMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="hover:bg-gray-400 hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover: cursor-pointer px-3 py-2 rounded lg:hidden"
        onClick={openModal}
      >
        <svg className="w-6 h-8 md:w-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-y-0 right-0 z-50 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-gray-500 bg-opacity-40" />
            </Transition.Child>

            {/* モーダルの配置をブラウザに教える　ゼロ幅 */}
            <span className="inline-block h-screen align-top" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl overflow-hidden text-center  transition-all transform bg-white shadow-xl ">
                <Dialog.Title as="h3" className="p-4 font-medium leading-6 text-gray-900">
                  Menu
                  {/* モーダル展開後の表示 */}
                </Dialog.Title>
                <div className="flex flex-col items-center mt-2 space-y-4 mb-6 rounded ">
                  <NextLink href="/" className="block border-none outline-none ">
                    <div className=" hover:bg-gray-400 hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover:cursor-pointer px-3 py-2 rounded ">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </div>
                  </NextLink>
                  <NextLink href="blog-detail" className="block text-sm">
                    <div className="hover:bg-gray-400 hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover: cursor-pointer px-3 py-2 rounded ">
                      <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <p>このブログについて</p>
                    </div>
                  </NextLink>
                  <ModalContactForm className="block" />
                </div>
                <div className="w-60 h-auto border-t-2  bg-white  relative">
                  <h3 className="pt-4 pl-3 text-left font-bold  ">このサイトについて</h3>
                  <div className="border-b-8 border-green-500/40 w-[62%] ml-3 absolute top-8 "></div>
                  <p className="py-4 px-3 leading-5 text-sm text-left ">
                    管理人である<span className="font-bold"> 「かわゆー」 </span>
                    が、読書を通じて得た「学び」や「気づき」を記事にして紹介していく書評ブログです。
                  </p>
                </div>
                <div className="flex flex-col w-60 h-auto border-t-2 bg-white  text-left relative">
                  <h3 className="pt-4 px-3 font-bold text-left ">管理人</h3>
                  <div className="border-b-8 border-green-500/40 w-[21%] ml-3 absolute top-8 "></div>

                  <div className="flex flex-col items-center ">
                    <div className="w-40 py-16 m-2 border bg-white rounded-full text-center ">イメージ</div>
                  </div>
                  <h3 className="pt-2 pl-3">かわゆー</h3>
                  <p className="p-3 text-sm">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
                </div>

                <div className="flex mt-4 justify-end">
                  <button
                    className="my-2 inline-flex justify-center px-4 py-2  text-green-900 bg-green-100 border border-transparent rounded-md text-sm hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
