import Styles from "./product.module.scss"
import c from "clsx"
import React from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import '../../public/global.css'
export default function product(){
    const router =useRouter()
    console.log(router)
    return(
        <>
            <Head>
                <title>ProductDetail</title>
            </Head>
            <h1>{router.query.id}</h1>
        </>
    )
}