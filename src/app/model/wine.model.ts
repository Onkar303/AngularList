export interface Wine{
    winery:string;
    wine:string;
    location:string;
    image:string;
    id:number;
    rating:Rating;
}

export interface Rating{
    average:string;
    review:string;    
}