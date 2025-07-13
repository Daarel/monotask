import { useNavigate } from "react-router-dom";

import { navLink } from "../../constants/index";
import Button from "../components/Button";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { background: "transparent" },
      { backgroundColor: "00000050", duration: 1, ease: "power1.inOut" }
    );
  }, []);

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <nav className='flex justify-evenly items-center h-20'>
        <a
          href='/'
          className='text-3xl font-bold bg-gradient-to-br from-[var(--color-primary-blue)] via-[var(--color-secondary-blue)] to-[var(--color-bright-blue)] bg-clip-text text-transparent cursor-pointer'
        >
          MonoTask
        </a>
        <ul className='flex gap-10'>
          {navLink.map(({ id, title }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className='underline-from-center hover:text-[var(--color-secondary-blue)] transition-colors duration-300 ease-in-out'
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          title='Sign up'
          onClick={handleSignup}
          className={"button transition-colors duration-300 ease-in-out"}
        />
        <Button
          title='Sign up'
          onClick={handleLogin}
          className={"button transition-colors duration-300 ease-in-out"}
        />
      </nav>
    </header>
  );
};

export default NavBar;
