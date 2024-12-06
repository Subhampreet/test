import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected({ children }) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        user ? (
            <div>
                {children} <LogoutLink>Sign Out</LogoutLink>
            </div>
        ) : (
            <div className="text-center">
                This page is protected, please <LoginLink>Login</LoginLink> to view it
            </div>
        )
    )
}