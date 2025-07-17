import Button from "./Button";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <section className='flex justify-between items-center h-[35rem]'>
      <div className='col-center ml-5 gap-10'>
        <h1 className='font-flaviotte text-9xl text-[var(--color-primary-blue)]'>
          Organized
        </h1>
        <p className='text-center text-md font-light paragraph'>
          MonoTask helps you stay on track and finish your work faster with a
          clean, distraction-free interface.
        </p>
        <Button
          onClick={handleSignup}
          className='button transition-colors duration-300 ease-in-out'
        >
          Try It Now
        </Button>
      </div>
      <img
        src='/images/planning.webp'
        alt='Planning'
        className='h-[30rem] w-auto rounded-l-3xl'
      />
    </section>
  );
};

export default Hero;
