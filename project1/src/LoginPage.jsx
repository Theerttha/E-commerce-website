import './Login.css'
function LoginPage(){
    return(
        <>
        <div className="LoginBody">
            
            <div className='topLogin'>
                <img src='pic2.jpg' className='image2'>
                </img>

            </div>
            <div className="Login">
                Login
            </div>
         
            <div className="LoginContent">
                <input class="Loginbars" type="phtext" placeholder="USERNAME"></input>
                <input class="Loginbars" type="phtext" placeholder="PASSWORD"></input>
                
                <button class="Loginbuttons">
                    LOGIN
                </button>
                
                
            </div>
            <div className='forgotpass'>
                Forgot Password?(I'm just a human)
            </div>
            <div className='passbuttondiv'>
                <button className='passbutton'>
                    Change Password
                </button>
            </div>
        </div>
        </>
    );
}
export default LoginPage