import { useState } from 'react'
import {Data} from '../data/cartelsES.js'
import arrowUp from '../assets/arrowUp.svg'
import arrowDown from '../assets/arrowDown.svg'
import cross from '../assets/cross.svg'
import '../styles/cartel.css'

function CartelsES () {
  const [isClosed, setIsClosed] = useState(null)

  const toggle = (i) => {
    if (isClosed === i) {
      return setIsClosed(null)
    }

    setIsClosed(i)
  }

  const [lightboxDisplay, setLightBoxDisplay] = useState(false)
  const [imageToShow, setImageToShow] = useState("")

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  return (
    <div className="cartelArea">
      {Data.map((data, i) => (
        <div key={data.id}>
          <div className="collapse">
            <div className="collapseTitleBloc">
              <div className="image">
                {data.image && data.image.map (image => (
                  <img className="collapseImage" onClick={() => showImage(image.picture)} src={image.picture} alt={image.file_name}/>
                ))}
                
                {
                  lightboxDisplay ? 
                  <div className="lightbox" >
                    <div className="lightboxBackground" >
                      <img className="lightboxCross" src={cross} alt="cross" onClick={hideLightBox}/>
                      <img className="lightboxImg" src={imageToShow} alt="test"/> 
                    </div>
                  </div>
                : ""
                }
              </div>
              <div className="collapseTitleArrow" onClick={() => toggle(i)}>
                <div className="collapseTitle" >
                  <h1>{data.title && data.title.map (title => (
                    <li key="title">{title}</li>
                  ))} </h1>
                </div>
                <div>
                  <div>{isClosed  === i ? (
                      <img src={arrowDown} alt="flèche bas" className="collapseArrow" />
                  ) : (
                    <img src={arrowUp} alt="flèche haut" className="collapseArrow" />
                  )}</div>
                </div>
              </div>
            </div>
            <div>{isClosed === i ? 
              <div className="collapseBlocText" >{data.cartel && data.cartel.map (cartel => (
                <div className="collapseCartel" key={cartel.id}>
                  <div className="collapseObject">
                    {cartel.object && cartel.object.map (object => (
                      <li key="object">{object}</li>
                    ))}
                  </div>
                  <div className="collapseInformations">
                    {cartel.informations && cartel.informations.map (information => (
                      <li key="information">{information}</li>
                    ))}
                  </div>
                  <p className="collapseDescription" >{cartel.description}</p>
                  <div className="collapseCredit">
                    {cartel.credit && cartel.credit.map (credit => (
                      <li key="credit">{credit}</li>
                    ))}
                  </div>
                  <p className="collapseNumInv" >{cartel.numInv}</p>
                  <p className="collapseAccuracy">{cartel.accuracy}</p>
                </div>
              ))}
              </div> : null }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartelsES