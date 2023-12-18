import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function AdCards({ ads }) {

    return (
        <Card.Group itemsPerRow='4' className='Ads-container'>
            {
                ads.map((ad) => (
                    <Card key={ad.id} as={Link} to={`/ads/${ad.id}`} >
                        <Image src={ad.image_url} alt='image' />
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
            }
        </Card.Group>
    )
}

export default AdCards