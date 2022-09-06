
import './Day3React.css'
const Header=({title})=>{
    return(
        <header>
            <h1 style= {headingStyle}>Hello(title)</h1>
            <h2 className='h2Head'>Hello Task Tracker</h2>
            <h3 id='h3Head'>H3 Heading</h3>
            <button className='btn'>Add</button>
        </header>
    )
}

const headingStyle={
    color:"darkcyan",
    backgroundColor:"lightblue",
    textAlign:"centre"
}
export default Header;