import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import ResourceCard from "../components/ResourceCard";

const tekstPrimena = `Slepi za korišćenje računara koriste tzv. čitače ekrana, koji im omogućuju i navigaciju po Internet stranama, pa i njihovo preslušavanje. Međutim, kvalitet govora u tom slučaju zavisi od sintetizatora na koji se čitač ekrana oslanja. AlfaNum je zahvaljujući visokokvalitetnoj sintezi govora na srpskom i drugim južnoslovenskim jezicima, jedini u mogućnosti da ponudi rešenje koje korisniku omogućuje potpuni komfor u pretraživanju Interneta putem govora na južnoslovenskom govornom području.
Rešenje je koncipirano tako da korisnik jednostavnim klikom na taster „Čitaj mi“ otvara plejer, koji čita sadržaj teksta na odabranoj stranici. Rešenje je prvenstveno namenjeno za čitanje vesti, i potvrđivanjem opcija „šta je najnovije“, odnosno, „šta je najvažnije“, korisnik skraćuje vreme pretrage vesti, što podiže efikasnost ovog informativnog servisa.
Treba istaći da, pored toga što je ova funkcionalnost od velike koristi slepima i slabovidima, ona pomaže i ljudima sa drugim tipovima invaliditeta. Osobe koje boluju od multiple skleroze i osobe sa dečjom i cerebralnom paralizom često nisu sposobne same da čitaju jer im to predstavlja izuzetan napor. Takođe, osobe sa disleksijom imaju teškoća u čitanju, kako u pogledu brzine čitanja tako i tačnosti, što utiče i na nivo razumevanja pročitanog.
Ozvučavanje sajtova pruža velike prednosti i svima ostalima, jer čovek u savremenom okruženju ima sve manje vremena i često je primoran da radi više poslova u isto vreme. Sada je moguće preslušavati odabrane vesti i uz to istovremeno obavljati neki drugi posao. Ozvučavanjem sajtova građanima bi se učinile dostupnijim i aktuelne informacije koje su neophodne za svakodnevni život, kao što su informacije neophodne za dolazak do potrebnih dokumenata (npr. izvoda iz matične knjige rođenih ili knjige državljana), informacije o stanju na putevima, servisne vesti iz javnih preduzeća...`


function CitajMi() {
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/citajmi.png"
        altText="Citajmi Logo"
        text='Omogućite preslušavanje sadržaja svog web sajta na srpskom jeziku dodavanjem opcije "Čitaj mi"'
      />
      <Primena
        title="Primena"
        text={tekstPrimena}
      />
      <ResourceCard
        title="Primeri ozvučenih web sajtova"
        links={["www.rts.rs", "www.e-uprava.rs", "www.poverenik.rs"]}
        buttonText="Pošalji upit"
      />
    </div>
  );
}

export default CitajMi
