import Image from "next/image";
import { syne } from "./layout";

export default function Home() {
  return (
    <div className="h-full flex flex-col md:flex-row justify-center items-center gap-12">
      <a
        className="flex flex-col justify-center gap-2 group"
        href="https://ivanna.sevkovych.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full border-2 overflow-hidden group-hover:-translate-y-3 transition-transform ease-in-out">
          <Image
            aria-hidden
            src="/assets/ivanna_sevkovych_bg.jpg"
            alt="Ivanna portrait"
            width={240}
            height={240}
          />
        </div>
        <p
          className={`text-2xl group-hover:underline text-center font-extrabold ${syne.className}`}
        >
          Ivanna
        </p>
      </a>
      <a
        className="flex flex-col justify-center gap-2 group"
        href="https://dmitriy.sevkovych.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-full border-2 overflow-hidden group-hover:-translate-y-3 transition-transform ease-in-out">
          <Image
            aria-hidden
            src="/assets/sevkovych_portrait_1024.jpg"
            alt="Dmitriy portrait"
            width={240}
            height={240}
          />
        </div>
        <p
          className={`text-2xl group-hover:underline text-center font-extrabold ${syne.className}`}
        >
          Dmitriy
        </p>
      </a>
    </div>
  );
}
