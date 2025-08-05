import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import LogoutButton from "@/Components/LogoutButton";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center mb-5">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/jasper-ai.svg" alt="logo" width={70} height={50} />
          <h2 className="text-primary-100">InsighTron</h2>
        </Link>
        <LogoutButton />
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
