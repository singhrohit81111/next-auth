'use client'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from '../../styles/styles.module.css';
import SiginWithGoogle from "./SiginWithGoogle";
import SigninWithFacebook from "./SigninWithFacebook";

export default function LoginForm() {
    // const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await signIn("credentials", {
            email: formData.email,
            password: formData.password,
        });


    };

    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <h1 className={styles.heading}>Login</h1>
                <SiginWithGoogle />
                <SigninWithFacebook />
                <div className={styles.divider}>Or</div>
                <hr className={styles.line}/>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputElements}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputElements}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className={styles.input}
                        />
                    </div>
                    <div ><button type="submit" className={styles.signInButton}>Sign in with Credentials</button></div>


                </form>
            </div>
        </div>
    );
}