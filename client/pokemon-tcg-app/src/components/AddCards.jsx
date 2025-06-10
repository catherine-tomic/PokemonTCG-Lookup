import '../App.css'
import Expansion from './Expansion.jsx'

function AddCards() {
    return (
    <div className="add-cards">
        <div className="expansion-grid">
            <Expansion />
            <Expansion />
            <Expansion />
            <Expansion />
            <Expansion />
            <Expansion />
            <Expansion />
        </div>
    </div> 
    )
}

export default AddCards;