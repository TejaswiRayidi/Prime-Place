import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Tejaswi",
        email: "tejaswi1@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Vamshi",
        email: "vamsh67@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]