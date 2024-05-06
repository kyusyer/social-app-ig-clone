import LoginForm from "../component/LoginForm";
import "./login.css";



export default function Login() {
    return (
        <div className="page-holder gap-x-10 w-[100vw] flex flex-row items-center justify-center" >
            <div className="bg-[url('./rsrc/ig-phone.png')] bg-no-repeat bg-contain h-[40rem] w-96 hidden md:block">


            </div>

            <div className="container-login-main h-[32rem]  flex flex-col gap-4 w-96">
                <div className="login-container w-fit border-2 border-black-200 h-80 flex flex-col justify-center items-center">
                    <div className="logo-container h-32 w-full flex items-end justify-center ">
                        <div className="bg-center bg-no-repeat bg-contain logo w-4/5 h-4/5 border-1 border-green-100 bg-[url('https://th.bing.com/th/id/OIP.gl5Ne0D6qPnFHaDHPWJU2AHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7')]" >

                        </div>


                    </div>
                    <LoginForm />
                    <div className="or-line gap-x-4 pt-4 flex flex-row items-center justify-center w-full h-3.5 " >
                        <div className="h-1 border-t-2 border-gray-300 w-32">

                        </div>
                        <div className="or">

                            OR

                        </div>
                        <div className="h-1 border-t-2 border-gray-300 w-32">

                        </div>

                    </div>
                    <div className="fb-login w-full h-12 flex justify-center items-center">

                        <div className="h-8 flex flex-row items-center justify-center w-full">
                            <a href="" className="gap-3.5 flex flex-row w-full justify-center items-center h-full">
                                <div className="fb-logo bg-center bg-no-repeat bg-contain logo w-5 h-full border-1 border-green-100 bg-[url('https://th.bing.com/th?id=OIP.MUHjuIogNCUF6KXosibV5gHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')]">


                                </div>
                                <div className="fb-text">

                                    Login with facebook

                                </div>
                            </a>

                        </div>





                    </div>
                </div>
                <div className="lower-box border-2 border-gray-200 w-96 h-24 flex justify-center items-center" >
                    <div className="sign-up flex flex-row items-center justify-center">
                        <span>Don't have an account yet? </span><a href="" className="text-blue-600">Sign Up</a>

                    </div>
                </div>
            </div>
        </div>
    )
}