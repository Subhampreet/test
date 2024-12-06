"use client"

import {useKindeAuth} from "@kinde-oss/kinde-auth-nextjs";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Protected({ children }) {
  const router = useRouter();
  const {isAuthenticated, isLoading} = useKindeAuth();

  console.log("ISAUNTHETICAT" + isAuthenticated)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  return <div>{ children }</div>;
}