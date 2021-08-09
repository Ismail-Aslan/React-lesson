import Inline from "./components/inline/Inline";
import StyleSheet from "./components/regular-style/StyleSheet";
import Sassy from "./components/sassy/Sassy";
import './app.css'
import styles from'./app.module.css'
import ModuleBtn from "./components/moduleCss/ModuleBtn";

const App = () => {
  return (
    <div>
      {/* <Inline/>
      <StyleSheet primary={true} />
      <br></br>

      <Sassy/>
      <br/> */}
     {/* <h1 className="error">Something went wrong</h1>
     <h1 className={styles.success}>200 Ok Success</h1>
     <h1 className={styles["success"]}>200 Ok Success</h1> */}

     <ModuleBtn btnClass="primary" btnName="Module"/>
     <ModuleBtn btnClass="secondary" btnName="CSS"/>

    </div>

  );
};

export default App;
