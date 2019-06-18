let Users = [{id: "12312adf", name: 'Jhon Avila'}];

let Places = [];

let Managers = [];

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