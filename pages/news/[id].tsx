import Styles from "./news.module.scss"
import c from "clsx"
import React from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import '../../public/global.css'
export default function news(){
    const router  =useRouter()
    console.log(router)
    return(
        <>
            <Head>
                <title>news</title>
            </Head>
            <h1>news </h1>
        </>
    )
}