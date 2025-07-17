import { LoginForm } from "@/components/login-form";

const LoginPage = () => {
  return (
    <div className='bg-gradient-to-tl from-[var(--color-primary-blue)] via-[var(--color-secondary-blue)] to-[var(--color-primary-blue)] flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm md:max-w-3xl'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
