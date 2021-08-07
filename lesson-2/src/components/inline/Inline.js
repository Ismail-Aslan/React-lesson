const myStyles = {
  par : {
    color: "blue",
    fontSize: "1.2rem",
    fontWeight: "bolder"

  },
  secondDiv: {
    backgroundColor: "yellow"
  }
}


const Inline = () => {
  return (
    <div style={{backgroundColor:"red",color:"green"}}>
      <h1>Hello from Inline Comp</h1>


      <div style={myStyles.secondDiv}>
        <p style={myStyles.par}>Inline styling in react component</p>
      </div>
    </div>
  );
};

export default Inline;
