import * as React from "react";
import RatingStars from "../../../components/ratingStars";
import {FilterBox as Wrapper} from "../../templates/layout";
import {Input,Button,Label} from "../../templates/form";
import {FilterTitle } from "../../templates/text";
import { useFormik } from "formik";


const FilterBox = ({showFilterBox})=>{

    const [rating,setRating] = React.useState(0)
    const handleRate = (rating)=>{
        setRating(rating)
   }
 
    const  {values,handleChange} = useFormik({
        initialValues:{
            job:""
        }    
    }) 
    return(
        showFilterBox?<Wrapper>
            <FilterTitle>Filter</FilterTitle>
            <form>
                <Label>
                    Job
                </Label>
                <Input type="text" placeholder="job" name="job" value={values.job} onChange={handleChange}/>
                <Label>
                    Rating
                </Label>
                <RatingStars handleRate={handleRate} enableRating/>
                <Button name="filter" href={values.job&&!rating?`/?job=${values.job}`:rating&&!values.job?`/?rating=${rating}`:`/?rating=${rating}&job=${values.job}`}>
                    submit
                </Button>
            </form>
        </Wrapper>:null
    )
}
export default FilterBox ;