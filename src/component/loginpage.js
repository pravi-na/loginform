import React from "react";

function Loginpage(){
    const handleclick = (e) =>{
        e.preventDefault();
       var userinput =  document.querySelector(".userinput");
       var userpassword = document.querySelector(".userpassword");
        console.log("username:" +userinput.value);
        console.log("userpassword:" +userpassword.value);
    }
    return(
        <div>
            <div className="login">
            <div>
                <img src={require("../assets/img.jpg")} alt="" className="loginimage" />
            </div>
            <div>
                <div>Login</div>
                <form>
                    <div><input type="text" placeholder="Enter your username" className="userinput" /></div>
                    <div><input type="password" placeholder="Enter your password" className="userpassword" /></div>
                    <div><button onClick={handleclick}>click</button></div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Loginpage;