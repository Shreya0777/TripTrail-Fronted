const ProfileAvatar = ({ photoURL }) => {
  const defaultAvatar =
    "[img.daisyui.com](https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp)";

  return (
    <div className="flex justify-between items-end -mt-10 px-4">
      <div className="avatar">
        <div className="w-20 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2">
          <img src={photoURL || defaultAvatar} alt="avatar" />
        </div>
      </div>
      <button className="btn btn-sm btn-outline mb-1">Edit Profile</button>
    </div>
  );
};

export default ProfileAvatar;
