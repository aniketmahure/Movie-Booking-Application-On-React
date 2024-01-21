import { myAxios } from "./Helper";

export const signUp = (user) => {
    return myAxios.post("/api/v1.0/moviebooking/register",user).then((response)=> response.data);
}

export const login = (user) =>{
    return myAxios.post("/api/v1.0/moviebooking/login",user).then((response)=> response.data);
}

export const allMovies = () =>{
    return myAxios.get("/api/v1.0/moviebooking/all").then((response)=> response.data);
}

export const searchMovie = (movieName)=>{
    return myAxios.get("/api/v1.0/moviebooking/movies/search/"+movieName)
    .then((response)=> response.data)
}

export const forgotPassword = (user) =>{
    return myAxios.put("/api/v1.0/moviebooking/user/forgot",user).then((response)=> response.data)
}

export const bookMovie = (movieDetails) =>{
    return myAxios.post("/api/v1.0/moviebooking/"+movieDetails.movieName+"/add",movieDetails)
    .then((response)=> response.data)
}