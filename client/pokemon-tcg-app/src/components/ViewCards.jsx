import '../App.css'
import CondensedPack from "./CondensedPack"

function ViewCards() {
    return (
    <div className="view-cards">
        <div className="pack-grid">
            <CondensedPack />
            <CondensedPack />
            <CondensedPack />
            <CondensedPack />
            <CondensedPack />
            <CondensedPack />
            <CondensedPack />
        </div>
    </div> 
    )
}

export default ViewCards;