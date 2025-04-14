"use client";

import { Topbar, Footer } from "./components";

type SignOutLayoutProps = {
  children: React.ReactNode;
};

const SignOutLayout: React.FC<SignOutLayoutProps> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <div className="w-full flex items-center justify-center shrink-0">
        <Footer />
      </div>
    </section>
  );
};

export default SignOutLayout;
