import Topheader from "./Topheader"
import Middleheader from "./Middleheader"
import Mainheader from "./Mainheader";
function Header() {
    return (
      <div className="App">
        <>
        <Topheader/>
        <Middleheader/>
        <Mainheader/>
        </>
      </div>
    );
  }
  
  export default Header;