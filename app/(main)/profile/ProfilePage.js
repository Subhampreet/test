import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="profile-page">
      <div>{user?.given_name}</div>

      <img
        src={user?.picture ?? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
        alt="Image of the user"
        className="rounded-full h-8 w-8 hidden lg:block"
      />
    </div>
  );
};

