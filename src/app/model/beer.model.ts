import { Rating } from "./wine.model";

export interface Beer {
    price:string;
    name:string;
    image:string;
    id:number;
    rating:Rating
}