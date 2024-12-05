import { ModeToggle } from "./components/header";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <div>
      <ModeToggle />


      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
