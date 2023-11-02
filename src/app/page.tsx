'use client'

import LoginForm from '@/components/ui/LoginForm';
import { Session } from 'next-auth'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import styles from '.././styles/styles.module.css';

interface Props {
  session: Session | null
}

const Home: React.FC<Props> = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  if (!session) return <LoginForm />;

  return (
    <div className={styles.Container}>
      <div className={styles.profile}>
        <h1 className={styles.profileHeading}>Profile</h1>
        <div className={styles.profileContent}>
          <p className={styles.para}>Welcome, {session.user?.name}</p>
          <p className={styles.para}>You are logged in here as as, {session.user?.email}</p>
          <button onClick={() => signOut({ callbackUrl: `http://localhost:3000` })} className={styles.profileButton}>Signout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;