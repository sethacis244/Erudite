import React, {useState} from 'react'
import styles from './AuthPage.module.css'
export const AuthPage = () => {

    return (
        <div className={styles.form}>
            <div className={styles.login}>
                <label for="">Login</label>
                <br/>
                <input type="text" placeholder="Username" name="login"
                       />
            </div>
            <div className={styles.password}>
                <label htmlFor="">Password</label>
                <br />
                <input type="password" placeholder="Password" name="password"
                       /></div>
            <div className={styles.btn}>
                <button>Login</button>
            </div>
        </div>
    )
}