const users = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtrarUsuario = (
    users: {nome: string; idade: number; status: boolean}[], 
    usuario: string
): {nome: string; idade: number; status: boolean}[] => {
    return users.filter((index) => {
        return index.nome.toLowerCase().includes(usuario.toLowerCase())
    });

}

console.log(filtrarUsuario(users, 'jo'))