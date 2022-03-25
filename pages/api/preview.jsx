const preview = async (req, res) => {
  console.log(req.query);
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(`https://keyakiblog.microcms.io/api/v1/blog-data/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`, {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "" },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/blog/${content.id}` });
  res.end("Preview mode enabled");
};

export default preview;
