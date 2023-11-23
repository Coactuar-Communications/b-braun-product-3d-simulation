import { useNavigate } from "react-router";
//import { GrLinkNext } from 'react-icons/gr'

export const NextButton = ({ url }) => {
    const navigate = useNavigate();

    const redirectToUrl = () => {
        console.log("redirecting to: " + url);
        navigate("/" + url)
    }

    return(
        <button onClick={redirectToUrl}
       id="nextButton"
        >Next</button>
    )
}