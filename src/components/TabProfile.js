function TabProfile() {
    return(
        <>
           <div className="bg-white rounded-2">
                <div className="bannerProfile">

                </div>
                <div className="row p-3">
                    <div className="col-8">
                    <h3>Samuele Castaldo</h3>
                    <p className="m-0">Studente presso Uni</p>
                    <p>Napoli - Informazioni di contatto</p>
                    </div>
                    <div className="col-4">
                        <h5>immagine</h5>
                    </div>
                
                </div>
                
                <div className="d-flex justify-content-start gap-1">
                    <button className="buTabProfile">Disponibile per</button>
                    <button className="butProSec">Aggiungi sezione del profilo</button>
                    <button className="butProSec">Migliora profilo</button>
                    <button className="butProGra">Altro</button>
                </div>
           </div>
           
        </>
    )
}
export default TabProfile;