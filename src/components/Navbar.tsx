import { useNavigate } from "react-router-dom";

import { navLink } from "../../constants/index";
import Button from "../components/Button";

import { useEffect, useState } from "react";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsFixed(y > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {isFixed === true && <div className="h-20"/>}

      <nav
        className={`${
          isFixed ? "fixed top-0 left-0 z-50 shadow-md bg-[var(--color-creamy-white)]/30 backdrop-blur-md" : "relative"
        } w-full h-20 flex items-center justify-evenly px-8 bg-[var(--color-creamy-white)]`}
      >
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
        <div className='flex flex-row gap-2'>
          <Button
            title='Sign up'
            onClick={handleSignup}
            className={"button transition-colors duration-300 ease-in-out"}
          />
          <Button
            title='Login'
            onClick={handleLogin}
            className={"button transition-colors duration-300 ease-in-out"}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
