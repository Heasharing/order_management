
import { Outlet,Link } from "react-router";
const MainLayoutLogin = ()=>
{
    return (
        <div>
            <div style={{backgroundColor:"pink"}}> 
            <header>
                <nav>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    
                </nav>
            </header>
           
        </div>
        <Outlet />
        <div style={{backgroundColor:"lightblue"}}>
            Footer
            </div>
        </div>
    )
};
export default MainLayoutLogin