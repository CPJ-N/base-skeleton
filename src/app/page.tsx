"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to the SaaS Skeleton App
        </h1>
        <p className="text-lg text-center sm:text-left">
          This is a skeleton app designed to help you create SaaS products quickly and efficiently.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <Button
            onClick={() => navigateTo("/dashboard")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Go to Dashboard
          </Button>
          <Button
            onClick={() => navigateTo("/pricing")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-white gap-2 hover:bg-green-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            View Pricing
          </Button>
          <Button
            onClick={() => navigateTo("/checkout")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-purple-500 text-white gap-2 hover:bg-purple-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Checkout
          </Button>
          <Button
            onClick={() => navigateTo("/login")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-500 text-white gap-2 hover:bg-gray-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Login
          </Button>
          <Button
            onClick={() => navigateTo("/settings")}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-slate-600 text-white gap-2 hover:bg-slate-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Settings
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}