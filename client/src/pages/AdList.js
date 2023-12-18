import { useContext } from "react"
import { Card } from "semantic-ui-react"
import { UserContext } from "../components/context/UserProvider"
import AdCards from '../components/AdCards'

function AdList() {
    const { ads } = useContext(UserContext)

    return (
        <>
            {
                ads.length > 0 ? (
                    <AdCards ads={ads} />
                ) : (<h2>No ads found</h2>)
            }
        </>
    )
}

export default AdList
