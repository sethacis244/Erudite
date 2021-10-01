import {useRouts} from "./route";
import styles from './App.module.css'
import {NavBar} from "./NavBar/NavBar";
function App() {
    const userType = 'teacher' //student, teacher, default
  const routes = useRouts(userType)
  return (
          <div className={styles.main}>
              <NavBar userType={userType}/>
              <div className={styles.routes}>{routes}</div>
              <footer>just a footer</footer>
          </div>


  );
}

export default App;
