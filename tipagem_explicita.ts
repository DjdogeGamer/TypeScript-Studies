function showTicket(user: string, ticket: number) {
    console.log(`Ola ${user ?? 'Usuario Padrao'}. Seu Numero de Bilhete e ${ticket}.`)
}

showTicket('Eu', 123)

// Any

function sum(a:any, b:any) {
    return a+b
}

sum("abc", 123)