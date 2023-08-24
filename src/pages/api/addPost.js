import clientPromise from "./mongodb.js";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("posts");
    const { title, content } = req.body;

    const post = await db.collection("posts").insertOne({
      "title":title,
      "content":content,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};