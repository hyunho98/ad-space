import { useContext } from 'react'
import { Segment, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/context/UserProvider'
import AdCards from '../components/AdCards'

function ViewProfile () {
    const { user, ads } = useContext(UserContext)
    const userAds = ads.filter((ad) => user.ads.find((a) => ad.id == a.id))

    return (
        <Container>
            <Segment.Group>
                <Segment className='Center-text'>
                    <Image src={user.image_url} centered={true} size={'medium'} />
                    {user.name}
                    <Segment.Group>
                        { user.user.userable_type == "Company" ? 
                        (
                            <Segment>Industry: {user.industry}</Segment>
                        ) : (
                            <Segment>Market: {user.market}</Segment>
                        )}
                    </Segment.Group>
                </Segment>
            </Segment.Group>
            { user.ads.length > 0 ? (
                <Segment.Group>
                    <Segment>
                        <AdCards ads={userAds} />
                    </Segment>
                </Segment.Group>
            ) : (
                <h2>You don't have any ads</h2>
            ) }
        </Container>
    )
}

export default ViewProfile