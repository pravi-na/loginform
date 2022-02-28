import React from "react";

function Loginpage(){
    // getting information in console while clicking submit button
    const handleclick = (e) =>{
        e.preventDefault();
        var userinput =  document.querySelector(".userinput");
        var userpassword = document.querySelector(".userpassword");
        console.log("username:" +userinput.value);
        console.log("userpassword:" +userpassword.value);

        // if((userinput.value = " ") || (userpassword.value = " ") ){
        //     document.querySelector(".nameError").style.visibility = "visible";
        //     document.querySelector(".passError").style.visibility = "visible";
        // }
        // else{ 
        //     document.querySelector(".nameError").style.visibility = "hidden";
        //     document.querySelector(".passError").style.visibility = "hidden";
        // }
    }
    return(
        <div>
            <div className="login">
               {/* left side static image */}
            <div className="staticimage">
                <img src={require("../assets/img.jpg")} alt="" className="loginimage" />
            </div>
            {/* Right side login information */}
            <div className="loginDetails">
                <div><h1>Login</h1></div>
                <form>
                    <div><input type="text" placeholder="Enter your username" className="userinput" required/></div>
                    {/* <div className="nameError">Please enter username</div> */}
                    <div><input type="password" placeholder="Enter your password" className="userpassword" required/></div>
                    {/* <div className="passError">Please enter password</div> */}
                    <div><button onClick={handleclick} className="submitbtn">Submit</button></div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Loginpage;