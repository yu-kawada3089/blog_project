/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { Layout } from "../components/Layout";
import { MainAsideTemplate } from "../components/MainAsideTemplate";

export default function Blog() {
  return (
    <Layout>
      <div className="flex justify-center mx-auto space-x-20 lg:max-w-6xl ">
        <main className="flex flex-col mt-6 w-screen md:max-w-[68%] ">
          <div className="my-16 h-full bg-white border-2">
            <h2 className="mx-2 mt-8 text-2xl font-bold md:pl-1 md:mx-8 md:text-3xl ">このブログについて</h2>　
            <div className="px-2 pt-10 mt-4 md:px-10">
              <div className="relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="introduction" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl">
                  ブログ名の由来
                </h2>
              </div>
              <div className="mt-8 text-sm leading-8 md:text-base">
                <p>自然の中を散策するのが好きなのもあり、”木”の名前を付けることは決めていました。</p>
                <br />
                <p>
                  それで「何の木にしようか？」と考えていたところ、私の大好きなマンガのエピソードの中に相手を”けやきの木”に例えるシーンがあり、そのシーンの中での文言にすごく感銘を受けたのを思い出して”けやき”にしようと決めました。
                </p>
                <br />
                <p>ゆっくり時間をかけて大きくしていきたいですね。</p>
                <br />
                <p>
                  ちなみに好きなマンガのエピソードは、羽海野チカさんの「３月のライオン」の「焼け野が原」です。アニメにもなってますので気になった方はぜひぜひ。
                </p>
              </div>
            </div>
            <div className="px-2 pt-10 mt-4 md:px-10 ">
              <div className=" relative border-b-8 border-green-500 border-opacity-40">
                <h2 id="recommendation" className="absolute -top-4 text-lg font-bold md:-top-5 md:text-2xl ">
                  きっかけと目的
                </h2>
              </div>
              <div className="my-8 font-noto text-sm leading-8 md:text-base">
                <p>このブログは管理人がプログラミングを学習する過程で生まれました。</p>
                <br />
                <p>
                  制作テーマを決める際、「作るなら小さくても人の役に立つサービスでも作れないかな」とは考えもしましたが２０００％挫折するという結論に至り５秒で考えを改めました。
                </p>
                <p>それは少し先の目標として置いておき、まずは「自己研鑽の場を作る」ことをテーマにして制作しています。あせらないこと大事。</p>
              </div>
            </div>
          </div>
        </main>
        <MainAsideTemplate />
      </div>
    </Layout>
  );
}
