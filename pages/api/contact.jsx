import { isContact } from "../../components/utils/TypeGuardUtils";

const contact = async (req, res) => {
  const WRITE_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  console.log("contact通過");

  //クエリとapiキーのチェック
  if (!isContact(req.body) || typeof WRITE_API_KEY === "undefined") {
    return res.status(404).end();
  }

  const content = await fetch(`https://keyakiblog.microcms.io/api/v1/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-MICROCMS-API-KEY": WRITE_API_KEY,
    },
    body: JSON.stringify(req.body),
  })
    .then(() => "Created")
    .catch(() => null);

  //cms側で正しく作成されたかチェック
  if (content !== "Created") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "OK" });

  res.end("Contact enabled");
};

export default contact;
