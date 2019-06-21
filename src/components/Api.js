let Users = [];

let Places = [];

let Managers = [];

let Careers = [
    {id: "1", name:"Arts and Humanities"},
    {id: "2", name:"Education and Teaching"},
    {id: "3", name:"Computers and IT"},
    {id: "4", name:"Health and Medicine/Nursing"}
];

let Buildings = [
    {id:"1", name:"E48"},
    {id:"2", name:"E44"},
]

//Adds a new User
export const addUser = (data) => {
    Users = [...Users, data];
    return Promise.resolve(data);
};

//Get all the userlist
export const getUsers = () => {
    const user_list = [...Users]
    return Promise.resolve(user_list)
    //return Promise.reject(new Error("Problemas de conexion"))
}

//Adds a new Place
export const addPlace = (data) => {
    Places = [...Places, data];
    return Promise.resolve(data);
};

//Adds a new manager
export const addManager = (data) => {
    Managers = [...Managers, data];
    return Promise.resolve(data);
}

//get all the careers
export const getCareers = () => {
    return Promise.resolve(Careers);
}

//get all the buildings
export const getBuildings = () => {
    return Promise.resolve(Buildings);
}