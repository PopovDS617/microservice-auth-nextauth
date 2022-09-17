import ProfileForm from './ProfileForm';

const UserProfile = () => {
  const changePasswordHandler = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <section className="w-3/12 my-5 mx-auto max-w-25 p-1 flex flex-col justify-center items-center bg-emerald-400 text-center rounded-lg">
      <h1 className="text-center m-5 text-3xl">your profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
};

export default UserProfile;
