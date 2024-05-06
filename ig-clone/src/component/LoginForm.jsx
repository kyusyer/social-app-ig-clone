import { useEffect, useState } from "react";



export default function LoginForm() {

    const [showHide, setShowHide] = useState("Show");
    const [passwordInput, setPasswordInput] = useState("Password");


    // useEffect(
    //     ()=>{
    //         setShowHide("show");
    //         setPasswordInput("password");
    //     },[]
    // )

    function handleShowHIde() {

        if (showHide === "Show") {
            setShowHide("Hide");
            setPasswordInput("text");

        }
        else {
            setShowHide("Show");
            setPasswordInput("password");
        }

    }

    return (
        <form action="" className=" flex h-fit w-96 border-green-400 justify-center items-center">
            <div className="form-component-holder  w-4/5  pt-2 gap-y-4 flex flex-col ">

                <div className="input-holder w-full h-10 border-gray border-2">
                    <label className="h-full flex items-end pl-2" htmlFor="">
                        <input className="w-full outline-0 focus:outline-0" type="text" placeholder="Phone number, username, or email" />
                    </label>



                </div>
                <div className="input-holder flex  flex-row justify-between h-10 border-2 border-gray items-center pr-2">

                    <label htmlFor="" className="items-end pl-2 pr-2 h-full flex flex-row w-4/5" >
                        <input className="w-full focus:outline-0" type={passwordInput} placeholder="password" />
                    </label>
                    <div className="show-hide h-4/5 select-none flex justify-center items-center" onClick={handleShowHIde} >
                        {showHide}

                    </div>

                </div>
                <div className="submit-holder w-full h-8">
                    <input type="submit" value="Log in" className="rounded w-full h-full bg-blue-600 text-white" />

                </div>


            </div>


        </form>
    )
}