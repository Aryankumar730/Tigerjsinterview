import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import AddData from '../components/AddData'
import Notes from '../components/Notes';
import styles1 from '../styles/AddData.module.css';
import dataContext from '../Context/dataContext';
import { useContext, useEffect } from 'react';
import Head from 'next/head'





export default function Home() {

 
  
 
  const context = useContext(dataContext);
  const { visible, handleVisible, database } = context;

  useEffect(()=>{
    database();
    
  },[ ])


  return (
    <>
    <Head>
        <title>Database</title>
        <meta name="description" content="Database based on CRUD operations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h3 className={styles.main}>Welcome to the Database</h3>
        <hr />

        <div className={`form-group ${styles.main}`}>
          <button type="submit" className={`btn-block btn-primary ${styles1.btnClick}`} onClick={() => { handleVisible() }} >Add Record <i className="fa-solid fa-user-plus"></i></button>
        </div>

        {visible &&

          <AddData />
        }

        <h3 className={styles.main}>Data Entries</h3>
        <hr />
        <Notes />
      </div>
    </>
  )
}
