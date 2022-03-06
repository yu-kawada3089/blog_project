import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { usePosts } from "../components/hooks/usePosts";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const posts = usePosts();
  const [articles, setArticles] = useState([]);
  const [categoryFlag, setCategoryFlag] = useState("");

  const [knowledgeToggle, setKnowledgeToggle] = useState(false);
  const [healthToggle, setHealthToggle] = useState(false);
  const [timeToggle, setTimeToggle] = useState(false);
  const [philosophyToggle, setPhilosophyToggle] = useState(false);

  const [initialToggle, setInitialToggle] = useState(false);

  return (
    <Component
      {...pageProps}
      {...posts}
      articles={articles}
      setArticles={setArticles}
      knowledgeToggle={knowledgeToggle}
      setKnowledgeToggle={setKnowledgeToggle}
      healthToggle={healthToggle}
      setHealthToggle={setHealthToggle}
      initialToggle={initialToggle}
      setInitialToggle={setInitialToggle}
      categoryFlag={categoryFlag}
      setCategoryFlag={setCategoryFlag}
      timeToggle={timeToggle}
      setTimeToggle={setTimeToggle}
      philosophyToggle={philosophyToggle}
      setPhilosophyToggle={setPhilosophyToggle}
    />
  );
}

export default MyApp;
