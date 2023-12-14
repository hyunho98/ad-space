import { useContext } from "react"
import { Link } from 'react-router-dom'
import { Card, Image } from "semantic-ui-react"
import { UserContext } from "../components/context/App"

function AdList() {
    const { ads } = useContext(UserContext)

    return (
        <Card.Group itemsPerRow='4' className='Ads-container'>
            {
                ads.length > 0 ? (
                    ads.map((ad) => (
                        <Card key={ad.id} as={Link} to={`/ads/${ad.id}`} >
                            <Image src={ad.company.image_url} alt='image' />
                            <Card.Content>
                                <Card.Header>{ad.product}</Card.Header>
                                <Card.Meta>{ad.company.name}</Card.Meta>
                                <Card.Description>{`${ad.content.slice(0,50)}...`}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                { ad.agency ? `Claimed by ${ad.agency.name}`: `This ad has not been claimed yet`}
                            </Card.Content>
                        </Card>
                    ))
                ) : (<h2>No ads found</h2>)}
        </Card.Group>
    )
}

export default AdList
