import useSWR from "swr";

const fetcher = async (args, key) => {
  const res = await fetch(args, key);

  if (!res.ok) {
    throw new Error("エラーが発生したため、時間を置いて再度接続をお試しください。");
  }
  const json = await res.json();
  return json;
};

export const usePosts = () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };

  const { data: posts, error } = useSWR(["https://keyakiblog.microcms.io/api/v1/blog-data", key], fetcher);

  return { posts, error };
};
