import ProfileForm from './ProfileForm';

const UserProfile = () => {
  return (
    <section className="w-3/12 my-5 mx-auto max-w-25 p-1 flex flex-col justify-center items-center bg-emerald-400 text-center rounded-lg">
      <h1 className="text-center m-5 text-3xl">your profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
