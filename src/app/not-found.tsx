import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 font-manrope">
      <p className="text-8xl font-bold tracking-tight text-white sm:text-9xl">
        404
      </p>
      <h1 className="mt-6 text-center text-xl font-semibold text-white sm:text-2xl">
        La page que vous recherchez est introuvable.
      </h1>
      <p className="mt-3 text-center text-sm leading-relaxed text-zinc-400">
        Elle a peut-être été déplacée ou n&apos;existe plus.
      </p>
      <Link
        href="/"
        className="group relative mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:bg-white/20"
      >
        <span>Revenir à l&apos;accueil</span>
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
