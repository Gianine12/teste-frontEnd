import Table from "@/components/table";

interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: number,
        lng: number
    }
}

interface Comapany{
    name: string,
    catchPhrase: string,
    bs: string
}

export interface User{
    id: number,
    name: string,
    username: string,
    email: string
    address: Address
    phone: string,
    website: string,
    company: Comapany
}

export default async function Usuario(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    return(
        <div className="flex flex-col justify-items-center">
            <div className="flex justify-center">
                <h1 className="font-bold">Lista de usuarios</h1>
            </div>
            <div className="flex flex-col justify-items-center">
                <Table users={data}/>
            </div>
        </div>
    )
}