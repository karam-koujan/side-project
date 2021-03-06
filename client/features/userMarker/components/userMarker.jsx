import * as React from "react";
import Marker from "../../common/components/marker";
import Styles from "../styles/styles.module.css";
import { useRouter } from "next/router";
const UserMarker = ({_id})=>{
    const router  = useRouter()
    return(
        <div className={Styles.container} >
        <Marker color="green" onClick={()=>router.push(`/?id=${_id}`,undefined,{shallow:true})}/>
        </div>

    )
}
export default UserMarker;

