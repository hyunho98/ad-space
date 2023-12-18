import { useContext } from 'react'
import { Segment, Container, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/context/UserProvider'
import AdCards from '../components/AdCards'

function ViewProfile () {
    const { user, ads } = useContext(UserContext)
    const userAds = ads.filter((ad) => user.ads.find((a) => ad.id == a.id))

    return (
        <Container>
            <Segment.Group>
                <Segment className='Center-text' clearing={true}>
                    <Image src={user.image_url} centered={true} size={'medium'} />
                    {user.name}
                    <Segment.Group>
                        { user.user.userable_type == "Company" ? 
                        (
                            <Segment>Industry: {user.industry}</Segment>
                        ) : (
                            <Segment>Market: {user.market}</Segment>
                        )}
                        <Button floated='right' as={Link} to={'/my_profile/edit'} content='Edit' />
                    </Segment.Group>
                </Segment>
            </Segment.Group>
            { user.ads.length > 0 ? (
                <Segment.Group>
                    <Segment>
                        <h2>My Ads</h2>
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