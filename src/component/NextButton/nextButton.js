import { useNavigate } from "react-router";

export const NextButton = ({ url }) => {
    const navigate = useNavigate();

    const redirectToUrl = () => {
        console.log("redirecting to: " + url);
        navigate("/" + url)
    }

    return(
        <button onClick={redirectToUrl}>Next</button>
    )
}