'use client' 

import LoginForm from '@/components/ui/LoginForm';
import { Session } from 'next-auth'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  session: Session | null
}

const Home: React.FC<Props> = ( ) => {
  const { data: session } = useSession();
console.log(session?.user);

  if (!session) return <LoginForm/>;

  return (
    <div>
      <h1>Profile</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user?.email}</p>
          <p>Designation: {session.user?.designation}</p>
          <button onClick={()=>signOut({callbackUrl:`http://localhost:3000`})}>signout</button>
        </div>
      ) : (
        <p>You are not logged in. Please <Link href="/">log in</Link></p>
      )}
    </div>
  );
};

export default Home;