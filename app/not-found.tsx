"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src="/empty.png" alt="notfound" />
      <h1 className="text-3xl font-bold mb-4 font-rickAndMorty">
        404 - Page Not Found
      </h1>
      <button
        className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg mt-4"
        onClick={() => router.push("/")}
      >
        Back Home
      </button>
    </div>
  );
}
