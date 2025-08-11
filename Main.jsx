import { useState } from 'react';
import './Main.css';


const items =[
  {
    category: 'js',
    img:'./1.png' ,
    title: 'Calculator App',
    desc: 'The Calculator App is a simple and responsive web-based calculator built using HTML, CSS, JavaScript and React. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication.',
  },
  {
    category: 'css',
    img:'./2.png' ,
    title: 'Foodera Restaurant',
    desc: 'Foodera in Ahmedabad is a budget-friendly dining and banquet venue offering North Indian, Chinese, and Mughlai cuisines. Renowned for generous portions, diverse menu options, and affordable pricing (₹200–₹430 per person), its a popular choice for dine-in, takeaway, and deliveries via Swiggy and Zomato.',
  },
  {
    category: 'css',
    img:'./3.png' ,
    title: 'Fylo landing-page',
    desc: 'The Fylo Landing Page is a clean and modern front-end design challenge originally featured on Frontend Mentor. It’s intended to help developers practice and sharpen their HTML, CSS, React ',
  },
  {
    category: 'react',
    img:'./4.png' ,
    title: 'E-commerce product-page',
    desc: 'The E-commerce Product Page is a fully responsive product showcase built using HTML, CSS, and JavaScript. This project replicates a typical online store’s product page.',
  },
  {
    category: 'js , react',
    img:'./5.png' ,
    title: 'Room homepage',
    desc: 'The Room Homepage is a stylish, modern landing page designed for a furniture or interior design brand. Built using HTML, CSS, React and JavaScript, this project showcases a clean layout with smooth interactions.',
  },
  {
    category: 'css',
    img:'./6.png' ,
    title: 'Easybank landing-page',
    desc: 'The Easybank Landing Page is a sleek, modern front-end project designed to showcase the services of a digital bank. Built using HTML, CSS, and optionally JavaScript, the page focuses on clean UI, responsive design.',
  },
]

const Main = () => {

  const [currentact , setCurrentAct] = useState("all")
  const [arr , setArr] = useState(items)
  

  const handleClick = (buttonCategory) => {
    setCurrentAct(buttonCategory)
    const newarr = items.filter((item) =>{
      return item.category.includes(buttonCategory);
    })
    setArr(newarr)
  }



  return(
    <main className='flex'>
      <div className='left-section'>
        <button onClick={()=> {setCurrentAct("all"); setArr(items)}} className={currentact === 'all' ? 'active' : ''}>All Projects</button>
        <button onClick={()=> {handleClick("css")}} className={currentact === 'css' ? 'active' : ''}>HTML & CSS</button>
        <button onClick={()=> {handleClick("js")}} className={currentact === 'javascript' ? 'active' : ''}>JavaScript</button>
        <button onClick={()=> {handleClick("react")}} className={currentact === 'react' ? 'active' : ''}>React & MUI</button>
      </div>
      <div className='right-section'>
        {arr.map((item)=>{
          return(
            <article key={item.title} className='card'>
            <img src={item.img}/>
            <div className='box'>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <div className='icons'>
                <span className='icon-link'></span>
                <a className='link flex' href="">
                  more
                  <span style={{alignSelf: "end" , marginRight: "10px"}} className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
        </article>
          )
        })}
      </div>
    </main>
  )
}



export default Main;