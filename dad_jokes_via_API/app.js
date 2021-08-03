const joke = document.querySelector("#joke");
const getNewJoke = document.querySelector("#joke-btn");

getNewJoke.addEventListener("click", dadTellsJoke);

dadTellsJoke();

////////////////////////
//Using AXIOS
////////////////////////
// Make a request for a user with a given ID
axios.get("https://icanhazdadjoke.com")
  .then((res) => {
    console.log(res.data.attachments.text);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  const fetchDadJoke= async () => {
      try{
          const res = await axios.get("https://icanhazdadjoke.com")
          console.log(res.data.attachments.text);
        }catch(e) => {
            console.log("Error", e);
          }
  }
  
  
////////////////////////
//Using FETCH --> with ASYNC & AWAIT
////////////////////////
// const fetchDadJoke = async () =>{
// const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
// try{
//     const res = await fetch('https://icanhazdadjoke.com', config);
//     const data = await res.json();
//  joke.innerHTML = data.joke;
// } catch(e){
// console.log("Something went wrong",e)
// }

////////////////////////
//Using FETCH --> .then() (Without nesting)
////////////////////////
/// function getJoke(){
// const config ={
//     headers: {
//        Accept: 'application/json',
//     }
// }
///fetch ('https://icanhazdadjoke.com', config)
//.then((res) => {
// console.log("Response, waiting to parse...", res)
//res.json()
//})
//.then((data) =>{
// console.log("Data parsed.."")
// joke.innerHTML =data.joke
// })
//.catch(e =>{
// console.log("Oh no! Error!", e)
// })

////////////////////////
//Using OLD FASHION XHR's (Callback Hell)
////////////////////////
//const req = new XMLHttpRequest();
// req.onload= function(){
//     console.log ("The Request is all done")
//     const data= JSON.parse (this.responseText);
//      console.log(data.attachments.text);
//}
// req.onerror = function (){
//     console.log("Error!!")
//     console.log(this);
// }
// req.open("GET", "https://icanhazdadjoke.com/slack");
// req.send();
