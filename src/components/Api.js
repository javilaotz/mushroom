let Users = [];

let Places = [];

//Adds a new User
export const addUser = (data) => {
    Users = [...Users, data];
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(data);
        }, 1000)
    );
};

//Adds a new Place
export const addPlace = (data) => {
    Places = [...Places, data];
    console.log(Places)
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(data);
        }, 1000)
    );
};