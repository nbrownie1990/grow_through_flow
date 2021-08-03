const jokes = document.querySelector("#joke");
const newJoke = document.querySelector("#joke-btn");

////////////////////////
//Using AXIOS
////////////////////////

const getNewJoke = async () => {
  const jokeText = await dadTellsJoke();
  jokes.innerHTML = `${jokeText}`;
};

const dadTellsJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data.joke;
  } catch (e) {
    return "no jokes available :( Sorry!";
  }
};

newJoke.addEventListener("click", getNewJoke);

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
