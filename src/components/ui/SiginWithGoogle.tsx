import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import styles from '../../styles/styles.module.css';
import { signIn } from 'next-auth/react';

export default function SiginWithGoogle() {
  return (
    <div className={styles.signInWithGoogle} onClick={()=>signIn('google')}>
      <span><FcGoogle className={styles.googleIcon}/></span>
      <span>Sign in with Google</span>
    </div>
  )
}
