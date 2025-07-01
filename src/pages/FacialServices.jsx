import FacialCards from '../components/FacialCards';

function FacialServices() {

    const facial = [
        {id: 1, title: "Glowynz's Signature Facial",
        session: "5 + 1 Session 2,495",
        url: "",
        content: "A luxurious treatment that deeply cleanses, hydrates, and rejuvenates your skin. Includes cleansing, exfoliation and a nourishing mask for a smooth, radiant glow. Perfect for all skin types!"},
        {id: 2, title: "Mermaid Facial (Hydra Facial) 999",
        session: "5 + 1 Session ,995",
        url: "",
        content: "A deep-cleansing, hydrating, and glow-boosting facial that uses advancesd HydraFacial technology to remove impurities, nourish the skin, and restore radiance. Perfect for achieving a dewy,, mermaid-like glow!"},
    ]
     
    return (
    
    <div className="home">
        <h1>Facial Services</h1>
            <div className="facial-grid">
                {facial.map((facial) => (
                    <FacialCards facial={facial} key={facial.id} />
                ))}
            </div>
    </div>
    );
}

export default FacialServices;