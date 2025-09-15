import { Limelight } from "next/font/google";
import Link  from "next/link";  
export default function Navbar(){
    return(
        <nav>
            <Link href="/">Home # </Link>
            <Link href="/about">About # </Link>
            <Link href="/contact">Contact # </Link>
            <Link href="/admin">admin # </Link>
            <Link href="/member">Member</Link>
        </nav>
    )
}