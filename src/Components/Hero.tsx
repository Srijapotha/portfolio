import RetroGrid from "./magicui/retro-grid";
import WordRotate from "./magicui/word-rotate";
import {
  ArrowDown01Icon,
  FacebookIcon,
  GithubIconFill,
  InstagramIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";
import { LinkedInIcon } from "./icons";
import { useCallback } from "react";
import { Url } from "@/helpers/constant";
export default function Hero() {
  const scrollDown = useCallback(() => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight - 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="relative mx-auto flex h-screen flex-col items-center justify-center">
        <div className="z-10 text-center">
          <div className="mb-5 text-xl capitalize text-white/90 md:text-2xl">
            HELLO 👋, I'M
          </div>
          <h1 className="py-3 text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            Srija Potha
          </h1>
          <WordRotate
            className="my-5 text-2xl font-bold text-primary md:text-4xl"
            words={[
              "I'm Front-End Developer",
              "I'm Programmer",
              "I'm Tech Enthusiast",
            ]}
          />
          <div className="mt-4 flex justify-center gap-2 sm:gap-3">
            <a
              href={Url.LinkedIn}
              title="LinkedIn Profile"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={Url.Instagram}
              title="Instagram Profile"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={Url.Email}
              title="Email"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href={Url.Whatsapp}
              title="Whatsapp"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <a
              href={Url.GitHub}
              title="Github Profile"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIconFill className="h-5 w-5" />
            </a>
            <a
              href={Url.Facebook}
              title="Facebook Profile"
              className="hv-allowed flex size-12 items-center justify-center rounded-2xl border-2 border-input transition-colors hover:border-primary hover:text-primary"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="absolute bottom-0 left-1/2 mt-8 -translate-x-1/2">
            <button
              onClick={scrollDown}
              className="hv-allowed mx-auto flex flex-col items-center justify-center gap-2 text-sm"
            >
              Scroll Down
              <ArrowDown01Icon className="h-6 w-6 animate-bounce text-slate-200" />
            </button>
          </div>
        </div>

        <RetroGrid />
      </section>
    </>
  );
}
