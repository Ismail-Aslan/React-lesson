import "./styles.css";
import {useState} from "react";

import { setInput } from "./../../helpers/inputHelpers"


const Form = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [country, setCountry] = useState("");

//name 
const handleNameField = (e)=> setName(e.target.value);

//Email 
const handleEmailField = (e)=> setEmail(e.target.value);

//Password 
const handlePasswordField = (e)=> setPassword(e.target.value);

//Country 
const handleCountryField = (e)=> setCountry(e.target.value);

//submit
const handleSubmit = (e) => {

  e.preventDefault();

  alert(`
  username: ${name}
  email : ${email}
  password: ${password}
  country: ${country}
  `)
  setName("");
  setEmail("");
  setPassword("");
  setCountry("");

}




//console.log(name,email,password,country);

  return (
    <div style={{ height: "110vh" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>{name}</p>
          <label>
            <strong>Username:</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            placeholder="name"
            value={name}
            // onChange={handleNameField}
            onChange={setInput(setName)} //helper kullandık ve yukarıda yazdığımız 4 ayrı fonksiyona gerek kalmadı. aşağıdaki tüm onChange eventlerini bu şekilde değiştirebiliriz.
          />
        </div>
        <div>
          <p>{email}</p>
          <label>
            <strong>E-mail:</strong>{" "}
          </label>
          <br />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailField}
          />
        </div>
        <div>
          <p>{password}</p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="pass"
            value={password}
            onChange={handlePasswordField}
          />
        </div>
        <div style={{ margin: "10px auto" }}>
          <p>{country}</p>
          <label>
            <strong>Country: </strong>
          </label>
          <select
          value={country}
          onChange={handleCountryField}
            style={{ marginTop: "10px", width: "100px", padding: "10px" }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <button className="btn__click" type="submit" >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
