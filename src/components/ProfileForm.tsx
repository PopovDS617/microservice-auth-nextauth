import { FormEvent } from 'react';
import { useRef } from 'react';
//import { useRouter } from 'next/router';

interface Props {
  onChangePassword: ({}) => void;
}

const ProfileForm = (props: Props) => {
  // const router = useRouter();
  let oldPasswordRef = useRef<HTMLInputElement>(null);
  let newPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const oldPasswordText = oldPasswordRef.current.value;
    const NewPasswordText = newPasswordRef.current.value;
    props.onChangePassword({
      oldPassword: oldPasswordText,
      newPassword: NewPasswordText,
    });
    // router.replace('/');
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full"
      onSubmit={submitHandler}
    >
      <div>
        <label className="block font-bold mt-3" htmlFor="new-password">
          new password
        </label>
        <input
          className="p-1 w-full color-black text-inherit rounded-lg border-solid border-black border-2 text-left focus:outline-none"
          type="password"
          id="new-password"
          ref={newPasswordRef}
        />
      </div>
      <div>
        <label className="block font-bold mt-3" htmlFor="old-password">
          old password
        </label>
        <input
          className="p-1 w-full color-black text-inherit rounded-lg border-solid border-black border-2 text-left focus:outline-none"
          type="password"
          id="old-password"
          ref={oldPasswordRef}
        />
      </div>
      <div className="my-2 mx-auto flex flex-col items-center">
        <button className="m-2 p-2 text-xl cursor-pointer bg-cyan-400 hover:bg-cyan-500 border-2 border-solid border-black rounded-lg">
          change password
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
