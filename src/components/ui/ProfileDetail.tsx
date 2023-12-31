// pages/profile.tsx
'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from '../../styles/styles.module.css';
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProfileDetail() {
  const { data: session } = useSession(

  );


  return (
    <div className={styles.Container}>
      {session && (
        <div className={styles.profile}>
        <h1 className={styles.profileHeading}>Profile</h1>
        <div className={styles.profileContent}>
          <p className={styles.para}>Welcome, {session.user?.name}</p>
          <p className={styles.para}>You are logged in here as as, {session.user?.email}</p>
          <button onClick={() => signOut({ callbackUrl: `http://localhost:3000` })} className={styles.profileButton}>Signout</button>
        </div>
      </div>
      )}
    </div>
  );
}


