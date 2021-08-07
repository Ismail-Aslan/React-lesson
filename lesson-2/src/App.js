import Inline from "./components/inline/Inline";
import StyleSheet from "./components/regular-style/StyleSheet";
import Sassy from "./components/sassy/Sassy";


const App = () => {
  return (
    <div>
      <Inline/>
      <StyleSheet primary={true} />
      <br></br>

      <Sassy/>
    </div>

  );
};

export default App;
