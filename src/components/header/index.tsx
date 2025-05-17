import Link from "next/link";

export default function Header(){
    return(
        <header className="flex justify-between items-center w-full bg-purple-700 text-white px-2 py-4">
            <nav>
                <ul className="flex items-center justify-center gap-4 ml-4">
                    <li className="hover:text-zinc-900">
                        <Link className="font-bold " href='/'>Home</Link>
                    </li>
                    <li className="hover:text-zinc-900">
                        <Link className="font-bold" href='/usuario'>Usuário</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center justify-end mr-4">
                <div className="font-bold">By NextJS</div>
            </div>
        </header>
    )
}