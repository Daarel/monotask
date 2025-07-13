import Button from "@/components/Button";
import Input from "@/components/Input";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <main className='w-screen h-screen'>
      <div>
        <h1 className="text-4xl font-semibold">Welcome Back</h1>
        <p className="text-[var(--color-soft-gray)] text-base font-light">Enter Your email and password to access your account.</p>
        <Form>
          <Input
            label='email'
            type='email'
            placeholder='Enter your email'
            required
          />
          <Input
            label='password'
            type='password'
            placeholder='Enter your password'
            required
            minLength={6}
            maxLength={16}
          />
          <div>
            <Input label='Remember Me' type='checkbox' required />
            <a>Forgot Your Password?</a>
          </div>
          <Button>Log In</Button>
        </Form>
      </div>
      <img></img>
    </main>
  );
};

export default Login;
