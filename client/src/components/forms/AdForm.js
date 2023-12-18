import { useState, useEffect, useContext } from 'react'
import { Form, Message } from 'semantic-ui-react'
import { UserContext } from '../context/UserProvider'

function AdForm ({ adParams=null }) {
    const { ads, setAds, navigate } = useContext(UserContext)
    const [errors, setErrors] = useState()
    const [adBody, setAdBody] = useState({
        product: "",
        content: "",
        image_url: ""
    })

    useEffect(() => {
        if (adParams) {
            const ad = ads.find((ad) => ad.id == adParams.id)
            setAdBody({
                product: ad.product,
                content: ad.content,
                image_url: ad.image_url
            })
        } // eslint-disable-next-line
    }, [])

    function handleChange(e) {
        setAdBody({...adBody, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        adParams ? (
            fetch(`/ads/${adParams.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adBody)
            })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setAds(ads.map((ad) => (ad.id == data.id) ? data : ad))
                        navigate(`/ads/${data.id}`)
                    })
                } else {
                    response.json().then((data) => setErrors(data.errors))
                }
            })
        ) : (
            fetch('/ads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adBody)
            })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        setAds([...ads, data])
                        navigate(`/ads/${data.id}`)
                    })
                } else {
                    response.json().then((data) => setErrors(data.errors))
                }
            })
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                label='Product Name'
                name='product'
                value={adBody.product}
                onChange={handleChange}
            />
            <Form.TextArea 
                label='Content'
                name='content'
                value={adBody.content}
                onChange={handleChange}
            />
            <Form.Input
                label='Image Url'
                name='image_url'
                value={adBody.image_url}
                onChange={handleChange}
            />
            <Form.Button
                content='Submit'
            />
            { errors ? <Message list={errors} /> : null }
        </Form>
    )

}

export default AdForm