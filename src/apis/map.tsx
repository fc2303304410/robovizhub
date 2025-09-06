
import {http} from "../utils/index" 

interface Properties {
    name:string,
}

interface Crs {
    type:string,
    properties:Properties
}

interface Featuresproperties{
    name:string,
    childNum:number
}

interface Featuresgeometry{
    type:string,
    coordinates:[][][],

}

interface Feature {
    geometry:Featuresgeometry
    properties:Featuresproperties
}

interface ResType  {
    type:string,
    crs:Crs
    feathers:Feature
}

export default function  fetchMapdataApi() {
    return http.request<ResType> ({
        url:'http://localhost:8888/mapdata'
    })
}