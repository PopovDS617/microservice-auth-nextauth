import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className="w-3/12 my-5 mx-auto max-w-25 p-1 flex flex-col justify-center items-center bg-emerald-400 text-center rounded-lg">
      <h1 className="text-center m-5 text-3xl">
        {isLogin ? 'login' : 'sign up'}
      </h1>
      <form className="flex flex-col justify-center items-center w-full">
        <div>
          <label className="block font-bold mt-3" htmlFor="email">
            your email
          </label>
          <input
            className="p-1 w-full color-black text-inherit rounded-lg border-solid border-black border-2 text-left focus:outline-none"
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <label className="block font-bold mt-3" htmlFor="password">
            your password
          </label>
          <input
            className="p-1 w-4/5 color-black text-inherit rounded-lg border-solid border-black border-2  text-left focus:outline-none"
            type="password"
            id="password"
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
