import React from 'react'
import styles from './Header.module.css';


export default function Header() {
    return (
        <div className= { styles.mainblue }>
            <div className={ styles.mainbar }> 
            
            <div> <img src="hesari.png" height= '40'></img></div>
            <div style={{marginLeft: '2%', marginRight: '2%'}}>Etusivu</div>
            <div style={{ marginRight: '2%'}}>Uutiset</div>
            <div style={{ marginRight: '2%'}}>Lehdet</div>
            <div style={{ marginRight: '8%'}}>Asiakaspalvelu</div>
            <div className={ styles.order }>Tilaa</div>
            <div style={{marginLeft: '2%', marginRight: '2%'}}>Kirjaudu</div>
            <div className={styles.icon}> 
            <div> Valikko  </div>
            <div><i class="material-icons">reorder</i></div> </div>
            
           

           
        
        </div>
        </div>
        

       
        
    )
}