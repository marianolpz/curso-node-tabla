

/*const getNombre = (idPost) =>{

    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => {
        return res.json()
    })
    .then (post => {
        console.log(post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => {
            return res.json()
        })
        .then(user => {
            console.log(user.name);
        })
    })
}


getNombre(80)
*/
const varr = false;
const a = 40;

if(a<0 | varr ==true){
    console.log("corecto")
}else{
    console.log("incorrecto");
}

console.log("si o si correcto")