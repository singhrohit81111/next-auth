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
   return <LoginForm />;
};

export default Home;