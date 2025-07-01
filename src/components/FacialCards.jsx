function FacialCards({facial}) {

  return <div className="facial-card">
            <div className="facial-poster">
              <img src={facial.url} alt={facial.title} />
            </div>
            <div className="facial-info">
              <h2>{facial.title}</h2> 
              <h3>{facial.session}</h3>
              <p>{facial.content}</p>
            </div>
        </div>
}

export default FacialCards;