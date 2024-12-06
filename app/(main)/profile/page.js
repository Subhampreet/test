import Protected from "@/app/components/protectedRoute";
import { getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import ProfilePage from "./ProfilePage";


export default async function Profile() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <Protected>
            <ProfilePage />
        </Protected>
    )
}