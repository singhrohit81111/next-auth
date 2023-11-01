// pages/profile.tsx
'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileDetail() {
  const { data: session } = useSession(
   
  );
console.log(session);

  return (
    <div>
      <h1>Profile</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user?.email}</p>
          <p>Designation: {session.user?.designation}</p>
          <button onClick={()=>signOut()}>signout</button>
        </div>
      ) : (
        <p>You are not logged in. Please <Link href="/">log in</Link></p>
      )}
    </div>
  );
}
