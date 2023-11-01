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
        const res=await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            
        });
        console.log(res,"res");
        
    };

    return (
        <div className={styles.container}>
            <div >
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputElements}>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputElements}>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.buttonContainer}><button type="submit">Login</button></div>
                    <div>Or</div>
                    <hr/>
                    <SiginWithGoogle/>
                    <SigninWithFacebook/>
                </form>
            </div>
        </div>
    );
}