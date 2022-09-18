import { ChangeEvent, FormEvent, useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { createUser } from '../lib/auth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const router = useRouter();

  const emailTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };
  const passwordTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordText(event.target.value);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: emailText,
        password: passwordText,
      });

      if (!result.error) {
        router.replace('/profile');
      }
    } else {
      try {
        const result = await createUser(emailText, passwordText);
      } catch (error) {
        console.log(error);
      }
      setEmailText('');
      setPasswordText('');
      setIsLogin(true);
    }
  };

  return (
    <section className="w-3/12 my-5 mx-auto max-w-25 p-1 flex flex-col justify-center items-center bg-emerald-400 text-center rounded-lg">
      <h1 className="text-center m-5 text-3xl">
        {isLogin ? 'login' : 'sign up'}
      </h1>
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={submitHandler}
      >
        <div>
          <label className="block font-bold mt-3" htmlFor="email">
            your email
          </label>
          <input
            onChange={emailTextHandler}
            className="p-1 w-full color-black text-inherit rounded-lg border-solid border-black border-2 text-left focus:outline-none"
            type="email"
            id="email"
            value={emailText}
            required
          />
        </div>
        <div>
          <label className="block font-bold mt-3" htmlFor="password">
            your password
          </label>
          <input
            onChange={passwordTextHandler}
            className="p-1 w-4/5 color-black text-inherit rounded-lg border-solid border-black border-2  text-left focus:outline-none"
            type="password"
            id="password"
            value={passwordText}
            required
          />
        </div>
        <div className="my-2 mx-auto flex flex-col items-center">
          <button className="m-2 p-2 text-xl cursor-pointer bg-cyan-400 hover:bg-cyan-500 border-2 border-solid border-black rounded-lg">
            {isLogin ? 'login' : 'create account'}
          </button>
          <button
            className="m-3 p-2 text-xl cursor-pointer bg-cyan-400 hover:bg-cyan-500 border-2 border-solid border-black rounded-lg  "
            type="button"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'create new account' : 'login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
