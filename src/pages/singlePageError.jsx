import { useRouteError } from "react-router";

const SinglePageError =()=>{
    const err = useRouteError();
    console.log(err)
    return <div>
  
    <p className='sub-text'>{err.message}</p>
    
  </div>
}

export default SinglePageError;