type User1 = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User1 = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}