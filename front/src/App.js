import {useRouts} from "./route";
import styles from './App.module.css'
import {NavBar} from "./NavBar/NavBar";
import {AuthPage} from "./CommonPages/AuthPage/AuthPage";
function App() {
    const userType = 'dfgfgf' //student, teacher, default
  const routes = useRouts(userType)
  return (userType === 'student' || userType === 'teacher') ?
    (<div className={styles.main}>
        <header className={styles.header}>User type is {userType}</header>
        <NavBar userType={userType}/>
        <div className={styles.routes}>{routes}</div>
        <footer>just a footer</footer>
    </div>):
      (<AuthPage/>);
      }

export default App;
