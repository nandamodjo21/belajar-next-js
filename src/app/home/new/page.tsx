interface User{
    id:number;
    name: string;
}

export default async function NewHomePage(){
   const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts: User[] = await data.json()
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.name}</li>
            ))}
        </ul>
    )
}