import { Link } from "react-router";

export default function Unauthorized() {
    return (
        <>
            <div>Unauthorized user</div>
            <Link to={'/'}>Go to home page</Link>
        </>
    )
}
