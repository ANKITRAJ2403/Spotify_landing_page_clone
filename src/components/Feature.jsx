import "./Feature.css"
import featuresContent from "./FeaturesContent";

function createCard(featuresContent){
    return(
        
            <li>
                <div className="feature-image-container">
                    <img src={featuresContent.imageURL} alt="" />
                </div>
                <div className="feature-content-container">
                    <h3>{featuresContent.featureHeading}</h3>
                    <p>{featuresContent.description}</p>
                </div>
            </li>
        
    )
}

function Feature(){
    return(
        <div className="feature-container">
            <div>
                <header>
                    <h2>Why Spotify?</h2>
                </header>

                <div className="feature-card">
                    <ul>
                        {featuresContent.map(createCard)}
                    </ul>
                    
                </div>

            </div>
        </div>
    )
}
export default Feature;