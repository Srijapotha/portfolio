// import { motion, Variants } from "framer-motion";
// import { Button } from "./ui/button";
// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
// };
//
// export default function MobileNavbar({
//   navOpen,
//   setNavOpen,
// }: {
//   navOpen: boolean;
//   setNavOpen: Function;
// }) {
//   const handleClick = () => {
//     setNavOpen(false);
//   };
//   return (
//     <>
//       <div
//         style={{
//           opacity: navOpen ? 1 : 0,
//           pointerEvents: navOpen ? "all" : "none",
//         }}
//         onClick={handleClick}
//         className="fixed inset-0 z-40 bg-black/70 transition-[opacity] duration-300"
//       ></div>
//       <motion.nav
//         initial={false}
//         animate={navOpen ? "open" : "closed"}
//         style={{ pointerEvents: navOpen ? "all" : "none" }}
//         className="fixed left-0 top-0 z-50 w-full p-4"
//       >
//         <motion.ul
//           variants={{
//             open: {
//               clipPath: "inset(0% 0% 0% 0% round 16px)",
//               transition: {
//                 type: "spring",
//                 bounce: 0,
//                 duration: 0.7,
//                 delayChildren: 0.3,
//                 staggerChildren: 0.05,
//               },
//             },
//             closed: {
//               clipPath: "inset(10% 50% 90% 50% round 16px)",
//               transition: {
//                 type: "spring",
//                 bounce: 0,
//                 duration: 0.3,
//               },
//             },
//           }}
//           className="grid grid-cols-1 gap-4 bg-background p-7"
//         >
//           <motion.a
//             href="#"
//             onClick={handleClick}
//             className="transition-colors hover:text-primary"
//             variants={itemVariants}
//           >
//             Home
//           </motion.a>
//           <motion.a
//             href="#about"
//             onClick={handleClick}
//             className="transition-colors hover:text-primary"
//             variants={itemVariants}
//           >
//             About
//           </motion.a>
//           <motion.a
//             href="#skills"
//             onClick={handleClick}
//             className="transition-colors hover:text-primary"
//             variants={itemVariants}
//           >
//             Skills
//           </motion.a>
//           <motion.a
//             href="#experience"
//             onClick={handleClick}
//             className="transition-colors hover:text-primary"
//             variants={itemVariants}
//           >
//             Experience
//           </motion.a>
//           <motion.a
//             href="#projects"
//             onClick={handleClick}
//             className="transition-colors hover:text-primary"
//             variants={itemVariants}
//           >
//             Projects
//           </motion.a>
//           <motion.a
//             href="#contact"
//             onClick={handleClick}
//             className="mt-5 w-full"
//             variants={itemVariants}
//           >
//             <Button className="w-full">Contact Me</Button>
//           </motion.a>
//         </motion.ul>
//       </motion.nav>
//     </>
//   );
// }
