import { Link,useRouteError } from "react-router-dom";

const Error = ()=>{
const error = useRouteError();
const [first,second,third] = [...error.status.toString()];

console.log(first);
    return <div className="flex-container">
    <div className="text-center">
      <h1>
        <span className="fade-in" id="digit1">{first}</span>
        <span className="fade-in" id="digit1">{second}</span>
        <span className="fade-in" id="digit1">{third}</span>
      </h1>
      <h3 className="fadeIn">{error?.error.message}</h3>
      <button type="button" name="button"><Link to="/">home</Link></button>
    </div>
  </div>
}

export default Error;