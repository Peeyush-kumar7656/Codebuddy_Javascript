// level {1/2/3}
//level 1
const get_Data=async()=>{
    const r =await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const response=await r.json();
    console.log(response);
}
get_Data();