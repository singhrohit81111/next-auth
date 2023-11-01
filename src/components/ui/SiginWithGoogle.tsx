import React from 'react'
import { AiOutlineGooglePlus } from 'react-icons/ai';
import styles from '../../styles/styles.module.css';
import { signIn } from 'next-auth/react';

export default function SiginWithGoogle() {
  return (
    <div className={styles.signInWithGoogle} onClick={()=>signIn('google')}>
      <span>Sign in with Google</span>
      <span><AiOutlineGooglePlus/></span>
    </div>
  )
}
