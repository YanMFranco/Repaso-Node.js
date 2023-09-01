let users = [];
let posts = [];

const getUsers = () => {
    return users;
};

const getUsersByName = (name) => {
    const result = users.filter((user)=>{
        return user.name===name;
    });
    if(result.length) return result;
    return {error: "No hay resultados"};
}

const getUsersById = (id) => {
    const result = users.find(user => user.id===parseInt(id));
    if(result) return result;
    return { error: "No se encontro resultado"};
}

let id = 1;

const createUser= (name,surname,age,mail) => {
    const newUser = {
        id:id++,
        name,
        surname,
        age,
        mail,
        posts:[],
    };

    users.push(newUser);
    return newUser;
}

const updateUser = (id,name,surname,age,mail) => {
    const user = users.find(user=>user.id===parseInt(id));
    
    if(!user) return {error: "User not found"};

    user.name=name;
    user.surname=surname;
    user.mail=mail;
    user.age=age;

    return user;
}

const deleteUser = (id) => {
    console.log(id);
    const user = users.find(user=>user.id===parseInt(id));
    
    if(!user) return {error: "User not found"};

    users = users.filter(user=>user.id!==parseInt(id));

    return user;
};

let postId=1

const createPost = (title,contents,userId) => {
    const user = users.find((user)=>user.id===userId);

    if(!user) throw new Error("user not found");

    const newPost = {
        id: postId++,
        title,
        contents,
        userId,
    };

    posts.push(newPost);
    user.posts.push(newPost.id);
    return newPost;
};

module.exports={getUsers,getUsersByName,getUsersById,createUser,deleteUser,updateUser,createPost};