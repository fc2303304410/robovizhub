import { useEffect } from "react"
import Leftpannel from "../Leftpannel"
import Middlepannel from "../Middlepanel"
import Rightepannel from "../Rightpanel"
import './index.scss'
import Amapwrap from "../Amapwrap"

Leftpannel
const Dashboard = () => {
    useEffect(()=>{
        
    },[])
    return (
        <div id="Dashboard">
                <Leftpannel></Leftpannel>
                <Middlepannel></Middlepannel>
                <Rightepannel></Rightepannel>
                <Amapwrap></Amapwrap>
        </div>

)
}

export default Dashboard