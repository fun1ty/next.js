"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname(); //현재 url 출력
  let b = useSearchParams(); //현재 쿼리스트링 출력
  let c = useParams(); //다이나믹 라우트 param출력
  return (
    <button
      onClick={() => {
        router.prefetch("/detail/dsd");
      }}
    >
      버튼
    </button>
  );
}

//1.여러페이지를 만들려면 [Dynamic Route]
//2.현재 URL이 뭔지 궁금하면 props/useRouter
//3.페이지이동, prefetch 등은 useRouter
