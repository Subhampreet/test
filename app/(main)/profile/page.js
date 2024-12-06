import Protected from "@/app/components/protectedRoute";
import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Profile() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

  return (
    user ? (
        <div>
          {user?.given_name} This page is protected - but you can view it because you are authenticated

          <LogoutLink>Sign Out</LogoutLink>
        </div>
      ) : (
        <div>
          This page is protected, please <LoginLink>Login</LoginLink> to view it
        </div>
    )    
  )
}