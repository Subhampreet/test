import Protected from "@/app/components/protectedRoute";
import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Profile() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <Protected>
            Hello from Profile Page
        </Protected>
    )
}