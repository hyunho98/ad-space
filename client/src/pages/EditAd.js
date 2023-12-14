import { useParams } from 'react-router-dom'
import AdForm from '../components/forms/AdForm'

function EditAd() {
    const params = useParams()

    return (
        <div className="Form" >
            <h2>Editing Ad</h2>
            <AdForm adParams={params} />
        </div>
    )
}

export default EditAd
