import * as React from "react";
import SearchBoard from "./searchBoard";
import {Form,SearchInput,SearchBtn} from "../templates/form"
import {CloseProfileBar,RemoveSearchText, SearchIcon} from "../templates/icon";
import {SearchBoard as SearchBoardWrapperParent,SearchBoardWrapper} from "../templates/layout";
import {NoResult} from "../templates/text";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import { Waypoint } from "react-waypoint";
import { useRouter } from "next/router";
const Search = ()=>{
    const [userName,setUserName] = React.useState("");
    const {data,isResultExist,fetchMore}=useInfiniteFetch(userName);
    const {query,push,replace} = useRouter();
    const handleOnChange = (e)=>{
       setUserName(e.target.value)
    } 
   const handleSearch = (e)=>{
       e.preventDefault()  
       const isProfileEmpty = !data.pages.length;
       if(!isProfileEmpty){
           const userId = data.pages[0].profiles[0]._id;
           
           push(`/?id=${userId}`)
        }
        
   }
  return(
      <Form onSubmit={handleSearch}>
          <SearchInput name="search" aria-label="search" placeholder="Search" onChange={handleOnChange} value={userName}/>
         {userName?(
             <SearchBoardWrapperParent>
             {!data.pages.length?!isResultExist?
                  ( 
                  <SearchBoardWrapper>
                   <NoResult>No Result</NoResult>
                   </SearchBoardWrapper>
                  ):null:(
                      <SearchBoardWrapper>
                            { 
                            data.pages.map((profiles,currentPageIdx)=>(
                                <React.Fragment key={currentPageIdx}>
                                {profiles.profiles.map(({userName,profileImg,rating,_id},profileIndex)=>(
                                      <SearchBoard setUserName={setUserName} userName={userName} _id={_id}  profileImg={profileImg} rating={rating} key={profileIndex}/>
                                 ))}
                                 {currentPageIdx===data.pages.length-1?<Waypoint onEnter={()=>fetchMore()}/>:null}                                
                                </React.Fragment>
                              )
                               
                               )
                            }
                    </SearchBoardWrapper>    
                  )
                }
             </SearchBoardWrapperParent>
            ):null}       
          <SearchBtn  type="button" name={query.id?"close the profile":"search for a user"} onClick={query.id?()=>replace("/",undefined,{ shallow: true }):handleSearch}>
              {query.id?<CloseProfileBar>&#10006;</CloseProfileBar>:<SearchIcon className="fa fa-search"></SearchIcon>}
          </SearchBtn>
         {userName?<RemoveSearchText onClick={()=>setUserName("")}>&#10006;</RemoveSearchText>:null}
      </Form>
  )
}

export default Search ;