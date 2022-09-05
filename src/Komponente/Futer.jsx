import React from 'react'


export default function Futer() {
  return (
    <div><footer className="footer-distributed">

    <div className="footer-left">

        <h3><span>Razmislite o ovome: </span></h3>

        <p className="footer-company-name">“Jedini način da sačuvaš zdravlje je da jedeš ono što ne želiš, piješ ono što ne voliš i da radiš ono što radije ne bi.” – Mark Twain</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Bulevar Kralja Aleksandra 144</span> Beograd, Republika Srbija</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+381 11 555 99 66</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p><a >vasezdravlje@gmail.com</a></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>O kompaniji</span>
            Kompanija je osnovana 2018. godine kao plod entuzijazma 
            osnivača koji su duže od 12 godina aktivni u oblasti farmaceutske industrije, sa sedištem u Beogradu.
        </p>

        <div className="footer-icons">

          <a href="https://github.com/Kristina36916/blogpost"><i class="fa fa-github"></i></a>
          <p>Klikom na ikonu odlazite na izvorni kod ovog projekta.</p>

        </div>

    </div>

</footer></div>
  )
}
