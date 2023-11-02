import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import styles from '../../styles/styles.module.css';
import { signIn } from 'next-auth/react';

export default function SigninWithFacebook() {
  return (
    <div className={styles.signInWithFacebook} onClick={()=>signIn('facebook')}>
      <span><BsFacebook className={styles.facebookIcon}/></span>
      <span>Sign in with Facebook</span>
    </div>
  )
}
