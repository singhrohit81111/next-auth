import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai';
import styles from '../../styles/styles.module.css';

export default function SigninWithFacebook() {
  return (
    <div className={styles.signInWithFacebook}>
      <span>Sign in with Facebook</span>
      <span><AiOutlineFacebook/></span>
    </div>
  )
}
