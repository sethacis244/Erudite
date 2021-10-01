import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import {StudentCreateGame} from "./StudentPages/StudentCreateGame/StudentCreateGame";
import {JoinGame} from "./StudentPages/JoinGame/JoinGame";
import {QuestionBank} from "./TeacherPages/QuestionBank/QuestionBank";
import {QuestionLoad} from "./StudentPages/QuestionLoad/QuestionLoad";
import {TeacherCreateGame} from "./TeacherPages/TeacherCreateGame/TeacherCreateGame";
import {OnlineList} from "./TeacherPages/OnlineList/OnlineList";
import {GameField} from "./CommonPages/GameField/GameField";
import {AuthPage} from "./CommonPages/AuthPage/AuthPage";
import {DefaultPage} from "./CommonPages/DefaultPage/DefaultPage";


export const useRouts = userType => {
    switch (userType) {
        case 'student':
            return (
                <Switch>
                    <Route path="/create-game" exact render={() =>
                        <StudentCreateGame/>}/>
                    <Route path="/join-game" exact render={() =>
                        <JoinGame/>}/>
                    <Route path="/question-load" exact render={() =>
                        <QuestionLoad/>}/>
                    <Route path="/game-field/:id" render={() =>
                        <GameField/>}/>
                    <Redirect to="/default-page" render={() =>
                        <DefaultPage/>}/>
                </Switch>
            )


        case 'teacher':
            return (<Switch>
                    <Route path="/create-game" exact render={() =>
                        <TeacherCreateGame/>}/>
                    <Route path="/question-bank" exact render={() =>
                        <QuestionBank/>}/>
                    <Route path="/online-list" exact render={() =>
                        <OnlineList/>}/>
                    <Route path="/game-field/:id" render={() =>
                        <GameField/>}/>
                    <Redirect to="/default-page" render={() =>
                        <DefaultPage/>}/>
            </Switch>)


        default:
            return (
                <Switch>
                    <Route path="/">
                        <AuthPage/>     
                    </Route>
                </Switch>
            )

    }
}