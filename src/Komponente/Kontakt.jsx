import React from 'react'

function Kontakt() {
  return (
    <div className="container">
    <div className="polje">
    <label for="ime">Ime</label>
    <input type="text" name="ime" id="ime" placeholder="Unesite ime"/>
</div>
<div className="polje">
    <label for="prezime">Prezime</label>
    <input type="text" name="prezime" id="prezime" placeholder="Unesite prezime"/>
</div>
<div className="polje">
    <label for="telefon">Telefon</label>
    <input type="text" name="telefon" id="telefon" placeholder="Unesite telefon"/>
</div>
<div className="polje">
    <label for="email">Email</label>
    <input type="text" name="email" id="email" placeholder="Unesite email"/>
</div>
<div className="polje">
    <label for="datum">Datum</label>
    <input type="date" name="datum" id="datum" />
</div>
<div className="polje">
            <button type="submit" name="submit" class="btn">Potvrdi</button>
        </div>

</div>
  )
}

export default Kontakt