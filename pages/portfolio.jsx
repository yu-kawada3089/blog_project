import HTMLReactParser from "html-react-parser";
import { Layout } from "../components/Layout";
import { MainAsideTemplate } from "../components/MainAsideTemplate";
import parse from "html-react-parser";
import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout>
      <Link href="/test_html_2023.html" passHref>
        ケーススタディを載せる予定
      </Link>
    </Layout>
  );
}
