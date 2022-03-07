/* eslint-disable tailwindcss/migration-from-tailwind-2 */
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
        className="hover: py-2 px-3 hover:text-gray-50 hover:bg-gray-400 hover:bg-opacity-75 rounded hover:shadow cursor-pointer lg:hidden"
        onClick={openModal}
      >
        <svg className="w-6 h-8 md:w-10 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="overflow-y-auto fixed inset-y-0 right-0 z-50" onClose={closeModal}>
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
              <div className="inline-block overflow-hidden w-full max-w-xl text-center  bg-white shadow-xl transition-all">
                <Dialog.Title as="h3" className="p-4 font-medium leading-6 text-gray-900">
                  Menu
                  {/* モーダル展開後の表示 */}
                </Dialog.Title>
                <div className="flex flex-col items-center mt-2 mb-6 space-y-4 rounded ">
                  <NextLink href="/" className="block border-none outline-none ">
                    <div className=" py-2 px-3 hover:text-gray-50 hover:bg-gray-400 hover:bg-opacity-75 rounded hover:shadow hover:cursor-pointer ">
                      <svg className="mx-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <div className="hover: py-2 px-3 hover:text-gray-50 hover:bg-gray-400 hover:bg-opacity-75 rounded hover:shadow cursor-pointer ">
                      <svg className="mx-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <div className="relative w-60 h-auto  bg-white  border-t-2">
                  <h3 className="pt-4 pl-3 font-bold text-left  ">このサイトについて</h3>
                  <div className="absolute top-8 ml-3 w-[62%] border-b-8 border-green-500/40 "></div>
                  <p className="py-4 px-3 text-sm leading-5 text-left ">
                    管理人である<span className="font-bold"> 「かわゆー」 </span>
                    が、読書を通じて得た「学び」や「気づき」を記事にして紹介していく書評ブログです。
                  </p>
                </div>
                <div className="flex relative flex-col w-60 h-auto text-left  bg-white border-t-2">
                  <h3 className="px-3 pt-4 font-bold text-left ">管理人</h3>
                  <div className="absolute top-8 ml-3 w-[21%] border-b-8 border-green-500/40 "></div>

                  <div className="flex flex-col items-center ">
                    <div className="py-16 m-2 w-40 text-center bg-white rounded-full border ">イメージ</div>
                  </div>
                  <h3 className="pt-2 pl-3">かわゆー</h3>
                  <p className="p-3 text-sm">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="inline-flex justify-center py-2 px-4 my-2  text-sm text-green-900 bg-green-100 hover:bg-green-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
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
