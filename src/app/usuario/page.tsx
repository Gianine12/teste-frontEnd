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

interface User{
    id: number,
    name: string,
    username: string,
    email: string
    address: Address
}

export default async function Usuario(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();

    return(
        <div className="flex flex-col">
            <div>
                <h1>Lista de usuarios</h1>
            </div>
            <div>
                <table className="border-separate border-spacing-2 border ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>
                                <button>Desativar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    )
}