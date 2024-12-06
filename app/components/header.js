import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../../public/logo.png";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./modeToggle";

import { Covered_By_Your_Grace, Montserrat, Poppins, Roboto } from 'next/font/google';

const coveredByYourGrace = Covered_By_Your_Grace({ subsets: ['latin'], weight: ['400'], });


export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 hidden lg:flex items-center gap-2" prefetch={false}>
          <Image src={Logo} alt="Logo" className="w-14 hidden lg:block" />
          <div className={`${coveredByYourGrace.className} text-2xl`}>buy me a pizza</div>
        </Link>
        <div className="ml-auto flex gap-4">
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            About
          </Link>
          <LoginLink>
            <Button variant="outline" className="justify-self-end px-4 py-1 text-sm">
              Sign in
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button className="justify-self-end px-4 py-1 text-sm">Sign Up</Button>
          </RegisterLink>

          <ModeToggle />
        </div>
      </header>
    </div>
  )
}

