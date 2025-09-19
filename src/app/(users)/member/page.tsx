"use client"
// Bus*12 Member page
import { useMebers } from "../../../store/MemberList"  
import Link from "next/link"

export default function MemberBusPage(){
    const { memberList } = useMebers();
    return(
        <>
            <ul>
                {memberList.map((m, id) => (
                    <li key={id}>
                        <Link href={`/member/${m.id}`}>
                        {m.id}  {m.nameTH} {m.nameEN}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}