import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link className="text-state-info underline" href="/">
        ホームに戻る
      </Link>
    </div>
  );
};
export default NotFound;