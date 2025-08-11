import { useState , useEffect} from 'react';
import './Header.css';

const Header = () => {

  const [showModel , setShowModel] = useState(false);
  const [theme , setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if(theme === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
  }, [theme])


  return(
    <header className='border'>
      <button className='menu icon-menu' onClick={() => setShowModel(true)}></button>
      <div></div>
      <nav>
        <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Articles</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button onClick={() => {
        localStorage.setItem("currentMode" , theme=== "dark"? "light" : "dark")
        setTheme(localStorage.getItem("currentMode"))
      }} className='mode'>
        {theme === "dark" ?(
          <span className='icon-moon'></span>
        ) : (
          <span className='icon-sun'></span>
        )}
      </button>
      

      {showModel && (
        <div className='fixed'>
          <ul className='model'>
            <li>
              <button className='icon-cross' onClick={() => setShowModel(false)}></button>
            </li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>
      )}
    </header>
  )
}


export default Header;