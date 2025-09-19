// import { Limelight } from "next/font/google";
import Link  from "next/link";  
export default function Navbar(){
    return(
        <nav className="bg-green-900 p-4 flex space-x-6 items-center justify-between">
             <div>
                <img src="/Images/mju_logo_main-resize.png" alt="logo mju" className=" h-15"/>
            </div>
            <div className="gap-20">
                <Link href="/" className="text-white hover:bg-gray-700 rounded px-2 py-1 text-center">Home </Link>
                <Link href="/about" className="text-white hover:bg-gray-700 rounded px-2 py-1">About</Link>
                <Link href="/contact" className="text-white hover:bg-gray-700 rounded px-2 py-1">Contact </Link>
                <Link href="/admin" className="text-white hover:bg-gray-700 rounded px-2 py-1">admin</Link>
                <Link href="/member" className="text-white hover:bg-gray-700 rounded px-2 py-1">Member </Link>
                <Link href="/portfolio" className="text-white hover:bg-gray-700 rounded px-2 py-1">portfolio(TCAS)</Link>
            </div>
        </nav>
    )
} 