import planning from "../../src/assets/images/planning.webp";

const HomePage = () => {
  return (
    <section className='flex-center h-[100rem] bg-amber-400'>
      <div className='flex-center'>
        <div className='col-center'>
          <h1 className='font-flaviotte text-8xl text-[var(--color-primary-blue)]'>
            Organized
          </h1>
          <p>
            MonoTask helps you stay on track and finish your work faster with a
            clean, distraction-free interface.
          </p>
          <button></button>
        </div>
        <img
          src={planning}
          alt='Planning'
          className='h-[30rem] w-auto rounded-l-3xl'
        />
      </div>
    </section>
  );
};

export default HomePage;
