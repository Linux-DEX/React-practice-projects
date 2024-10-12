import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
    const { id } =  useParams();
    // ? use this when outlet content is passing any object.
    // const obj = useOutletContext();
    return (
        <>
            {/* <h1>Book {id} {obj.hello}</h1> */}
            <h1>Book {id} </h1>
        </>
    )
}

export default Book