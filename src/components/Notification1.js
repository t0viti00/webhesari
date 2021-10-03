import React from 'react'
import styles from './Notification1.module.css';

export default function Notification1() {
    return (
        <div className={styles.everything}>
            <div className={styles.timantti}>
                <div className={styles.mainstyle}>
                    <div style={{marginLeft: '3%', fontWeight: '700'}}>PÄIVÄN TIMANTTI:</div>
                    <div style={{marginLeft: '1%', fontWeight: '500'}}>Tutkija kertoo : Näin sota näkyy meissä edelleen</div>
                </div>
                <div className={styles.mainstyle2}>
                    <div style={{marginLeft: '3%', fontWeight: '700'}}>PÄIVÄN TIMANTTI:</div>
                    <div style={{marginRight: '1%', fontWeight: '500'}}>Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa</div>

                
                </div>
                <div className={styles.mainstyle3}>
                    <div style={{marginLeft: '3%', fontWeight: '700'}}>MAINOS:</div>
                    <div style={{marginLeft: '1%', fontWeight: '500'}}>Faktoilla on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!</div>

                </div>
                
            </div>
            <div className={styles.newsbox}>
                
                <div className={styles.newsbox1}>
                  <div style={{fontSize: '50px', marginRight: '440px', marginTop: '10px', marginBottom:'10px'}}>Koronavirus</div>
                  <div><img src="13-3-11231265.jpg" height= '490'></img></div>
                  
                  <div className={styles.newsline1}> <span className={styles.bluetext}> Päivittyvä seuranta | </span> STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</div>

                  <div><img src="korona_kuva.jpg" height= '330'></img></div>
            
                      

                  </div>

                  <div className={styles.newsbox2}>
                      <div > Luetuimmat</div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>1</div>
                      <div className={styles.newstext}> Rikosepäilyt| EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turpaikkahakemuksessa</div>
                      
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>2</div>
                      <div className={styles.newstext}> HS Vantaa | Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>3</div>
                      <div className={styles.newstext}> Päivittyvä seuranta | STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>4</div>
                      <div className={styles.newstext}> Nyt.fi | Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>5</div>
                      <div className={styles.newstext}> Rikosepäilyt | Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>6</div>
                      <div className={styles.newstext}> Helsinki | Työryhmän ehdotus julki: Jättimäosisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>7</div>
                      <div className={styles.newstext}> Arki | Essi ja Kimmo Määttä "liinasivat taloudenpidon ja saivat tuntikaupalla lisää vapaa-aikaa - Näin yritysmaailmasta tuttu filosofi toimii arjen pyörittämisessä</div>
                      </div>
                      <div className={styles.textnumbers}>
                      <div className={styles.numbers}>8</div>
                      <div className={styles.newstext}> HS Visio | Christope Barraud on maailman paras talousennustaja. Nyt hän on huolissaan kahdesta maailmantalouden riskistä</div>
                      </div>
                      

                      
                      
                  </div>
                
            </div>
        </div>

        
        
    )
}
