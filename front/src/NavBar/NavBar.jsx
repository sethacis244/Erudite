import {NavLink} from "react-router-dom";
import React from "react";
import styles from './NavBar.module.css'

export const NavBar = (props) => {
    const userType = props.userType
    switch (userType) {
        case 'student':
            return (
                    <nav>
                        <NavLink to="/create-game">StudentCreateGame</NavLink>
                        <NavLink to="/join-game">JoinGame</NavLink>
                        <NavLink to="/question-load">QuestionLoad</NavLink>
                        <NavLink to="/game-field/:id">GameField</NavLink>
                    </nav>
            )
        case 'teacher':
            return (<nav>
                <NavLink to="/create-game">TeacherCreateGame</NavLink>
                <NavLink to="/question-bank">QuestionBank</NavLink>
                <NavLink to="/online-list">OnlineList</NavLink>
                <NavLink to="/online-list">OnlineList</NavLink>
                <NavLink to="/game-field/:id">GameField</NavLink>
            </nav>)


        default:
            return (
               <nav></nav>
            )

    }
}