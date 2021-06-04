import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import style from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <div className={style.illus}>
          <img src="/images/hero-illus.png" alt="" />
        </div>
        <div className={style.data}>
          <p>Authenticate Using LinkedIn to Submit an Article</p>
          <Link href='/submit-article'><a className={style.btn}>Verify via LinkedIn</a></Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home