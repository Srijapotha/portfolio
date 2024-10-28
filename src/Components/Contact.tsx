import { Url } from "@/helpers/constant";
import {
  FacebookIcon,
  GithubIconFill,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsappIcon,
} from "./icons";
import { motion, Variants } from "framer-motion";
export default function Contact() {
  return (
    <>
      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-14">
        <h2 className="heading relative mb-20 text-center text-4xl font-bold lg:text-5xl">
          Contact Me
        </h2>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delayChildren: 0.15,
            staggerChildren: 0.1,
          }}
          className="mx-auto grid max-w-max grid-cols-3 gap-6 text-lg"
        >
          <LinkBox
            href={Url.LinkedIn}
            icon={<LinkedInIcon className="h-8 w-8" />}
          />
          <LinkBox href={Url.Email} icon={<MailIcon className="h-8 w-8" />} />
          <LinkBox
            href={Url.Whatsapp}
            icon={<WhatsappIcon className="h-8 w-8" />}
          />
          <LinkBox
            href={Url.GitHub}
            icon={<GithubIconFill className="h-8 w-8" />}
          />
          <LinkBox
            href={Url.Instagram}
            icon={<InstagramIcon className="h-8 w-8" />}
          />
          <LinkBox
            href={Url.Facebook}
            icon={<FacebookIcon className="h-8 w-8" />}
          />

          {/* <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-orange-500"
          >
            
            Email
          </a>
          <a
            href="https://wa.me/919182704402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-emerald-500"
          >
            <WhatsappIcon className="h-8 w-8" />
            Whatsapp
          </a>
          <a
            href="tel:9182704402"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-slate-500"
          >
            <PhoneIcon className="h-8 w-8" />
            Call
          </a> */}
        </motion.div>
      </section>
    </>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
function LinkBox({ href, icon }: { href: string; icon: React.ReactElement }) {
  return (
    <>
      <motion.a
        href={href}
        target="_blank"
        // initial={{
        //   scale: 1,
        // }}
        // whileHover={{
        //   scale: 1.2,
        // }}
        variants={cardVariants}
        rel="noopener noreferrer"
        className="hv-allowed flex size-20 flex-row items-center justify-center gap-2 overflow-hidden rounded-2xl border border-gray-50/[.1] bg-gray-50/[.10] text-lg font-medium transition-colors hover:bg-gray-50/[.15]"
      >
        {icon}
      </motion.a>
    </>
  );
}
