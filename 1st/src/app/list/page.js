import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  console.log(result);

  return (
    <>
      {result &&
        result.map((value, index) => (
          <div key={index}>
            <div className="list-bg">
              <div className="list-item">
                <Link href={"/detail/" + value._id}>{value.title}</Link>
                <DetailLink />
                <p>{value.content}</p>
              </div>
            </div>
          </div>
        ))}
      ;
    </>
  );
}
