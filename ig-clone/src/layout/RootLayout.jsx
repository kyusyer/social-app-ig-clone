import {Outlet} from "react-router-dom";

export default function RootLayout(){
    return(
        <div className="root container mx-auto">
            <header className="h-24">
              
            </header>
            <main className="w-full flex justify-center">
                <Outlet/>
            </main>
            <footer>This is the footer part</footer>

        </div>
    )
}