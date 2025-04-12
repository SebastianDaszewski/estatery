import { Landing } from "@/features/landing";
import SignOutLayout from "@/features/signOutLayout/layout";

const Home = async () => {
  return (
    <SignOutLayout>
      <main>
        <Landing />
      </main>
    </SignOutLayout>
  );
};

export default Home;
