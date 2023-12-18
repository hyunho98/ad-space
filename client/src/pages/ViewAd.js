import { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../components/context/UserProvider'
import { Segment, Image, Button, Container } from 'semantic-ui-react'

function ViewAd() {
    const { user, setUser, ads, setAds, navigate } = useContext(UserContext)
    const params = useParams()
    const ad = ads.find((ad) => ad.id == params.id)

    function handleClaim() {
        fetch(`/ads/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                agency_id: user.id
            })
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setUser({...user, ads: [...user.ads, data]})
                    setAds(ads.map((a) => a.id == data.id ? data : a))
                })
            }
        })
    }

    function handleUnclaim() {
        fetch(`/ads/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                agency_id: null
            })
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setUser({...user, ads: user.ads.filter((ad) => ad.id != data.id)})
                    setAds(ads.map((a) => a.id == data.id ? data : a))
                })
            }
        })
    }

    function handleDelete() {
        fetch(`/ads/${params.id}`, {
            method: "DELETE"
        })
        .then((response) => {
            if (response.ok) {
                navigate('/')
                setUser({...user, ads: user.ads.filter((a) => a.id != ad.id)})
                setAds(ads.filter((a) => a.id != ad.id))
            }
        })
    }

    return (
        <Container>
            <Segment.Group >
                <Segment className='Center-text' clearing={true}>
                    <Image src={ad.image_url} centered={true} size='medium' />
                    {`${ad.product} ( ${ad.company.name} | ${ad.company.industry} )`}
                    { ad.company.id == user.id && user.user.userable_type == "Company" ? (
                        <>
                            <Button size='small' as={Link} to={`/ads/edit/${ad.id}`} content='Edit' floated='right' />
                            <Button size='small' color='red' onClick={handleDelete} content='Delete' floated='right'/>
                        </>
                    ) : null }
                </Segment>
                <Segment.Group>
                    <Segment>{ad.content}</Segment>
                </Segment.Group>
                {
                    ad.agency ? (
                        <Segment.Group>
                            <Segment className='Center-text' clearing={true}>
                                {`Claimed by ${ad.agency.name} (${ad.agency.market})`}
                                { ad.agency.id == user.id && user.user.userable_type == "Agency" ? (
                                    <Button onClick={handleUnclaim} content='Unclaim Ad' color='red' floated='right' />
                                ) : null}
                            </Segment>
                        </Segment.Group>
                    ) : (
                        user.user.userable_type == "Company" ? (
                            <Segment>This ad has not been claimed yet</Segment>
                        ) : (
                            <Segment clearing={true}>
                                <Button onClick={handleClaim} content='Claim Ad' floated='right' />
                            </Segment>
                        )
                    )
                }
            </Segment.Group>
        </Container>
    )
}

export default ViewAd