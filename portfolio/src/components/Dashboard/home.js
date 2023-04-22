import {auth} from "../../firebase";
const Home = () => {
    return(
        <div className="dashboard">
          <form>
            <p><input type="text" placeholder="Name"></input></p>
            <p><textarea type="text" placeholder="Description"/></p>
            <p><input type="text" placeholder="Url"></input></p>
            <p><input type="file" placeholder="Image"></input></p>
             <button type="submit">Submit</button>
             <button onClick={() =>auth.signOut}>Sign out</button>
          </form>
        </div>
    )
 }
 
 export default Home;