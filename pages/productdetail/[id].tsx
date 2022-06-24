import Styles from "./product.module.scss"
// import * as $ from "jquery"
// import '[LoaderPath]/loader.js'

import c from "clsx"
import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/imftest.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "mdi-icons/css/materialdesignicons.min.css";
import Document from "next/document"
import ProductCarousel from "../component/producrCarousel"
// import DOMPurify from 'isomorphic-dompurify';

import SetInnerHTML from "../component/setInnerHTML"
import { stringifyQuery } from "next/dist/server/server-route-utils"
// import '../../public/global.css'
export default function product(){
    const DOMPurify = require('isomorphic-dompurify');
    let apiFake={
        Id: 1,
        GiaBanLe:"20000",GurantyTime:"",ProductName:"",Description:"",Status:"",OriginPrice:'',GoldenCommitment:"",HighlightProduct:'',PromotionBranch:'',
        ProductBrand:{BrandName:''},
        ProductProperties:[{
            Id: 20,
            Note: "",
            Property: {
                CategoryId: 7,
                CategoryName: null,
                Id: 21,
                IsFilter: false,
                Note: "",
                PropertyId: 0,
                PropertyName: "Kích thước thùng",
                PropertyTemplateId: 0,
                Values:[{
                    Id: 115,
                    IsFilter: false,
                    Note: "",
                    PropertyId: 21,
                    Value: "1055 X 130 x 650mm",
                }]
            },
            PropertyId: 21,
        }],
        ProductImages:[{
            FileName: null,
            FilePath: "",
            FileSize: 0,
            FileType: null,
            Id: 0,
            Note: null,
            ThumbNailPath: ""
        }]
        }
    const discriptionRef=  useRef()
    const [apiProduct,setApiProduct]= useState(apiFake)
    const urlProduct='smart-tivi-sony-43-inch-kd-43x8050h-vn3'
    const [amount,setAmount]=useState(1)

    useEffect(()=>{
        fetch(`https://doantotnghiep.azurewebsites.net/api/Product/ByUrl/${urlProduct}?RaiseCountAccess=true`)
        .then(res=>res.json())
        .then((res)=>{
            setApiProduct(res.Result)
            return res
        })
    },[])
    
    console.log("apiProduct",apiProduct)
    
    const router =useRouter()
    function handleGoHome(){
        router.push("/");
    }

    const saleRice=(GiaBanLe:number,OriginPrice:number)=>{
        const resule= 100-Number(((GiaBanLe/OriginPrice)*100).toFixed(0))
        return "-"+resule+'%'
    }
    const handleBuy=()=>{
        // router.push("https://doantotnghiep.azurewebsites.net/gio-hang");
        // localStorage.setItem ('Value',apiProduct.Id);
        // var name = localStorage.getItem('product');
        // console.log("name",name)
    }
    useEffect(()=>{
        const elementDescription= document.getElementsByClassName("discription")
        const elementlistUnset=document.getElementsByClassName("list-unset") 
        const elementPromotion=document.getElementsByClassName("promotion") 
        const elementGoldenCommitment=document.getElementsByClassName("golden-commitment") 
        elementDescription[0].innerHTML=`${apiProduct.Description}`
        elementPromotion[0].innerHTML=`${apiProduct.PromotionBranch}`
        elementlistUnset[0].innerHTML=`${apiProduct.HighlightProduct}`
        elementGoldenCommitment[0].innerHTML=`${apiProduct.GoldenCommitment}`
        // if(elementGoldenCommitment[0]){

            const elementGoldenCommitmentI=elementGoldenCommitment[0].getElementsByTagName("i")
            // elementGoldenCommitmentI[0].forEach(function(item: string) {
            //     consso
            // });
            for(let i=0; i<elementGoldenCommitmentI.length;i++){
                elementGoldenCommitmentI[i].classList.add('icofont')
            }
            console.log("elementGoldenCommitmentI",elementGoldenCommitmentI)
        //     elementGoldenCommitmentI[0].classList.add("icofont")
        // }
    },[apiProduct])
    return(
        <>
            <Head>
                <title>ProductDetail</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="stylesheet" href="https://unpkg.com/@icon/icofont/icofont.css"/>
            </Head>
            <div className={c(Styles.osahanBreadcrumb,"osahan-breadcrumb p-5")}>
                <div className="container">
                
                {/* <i className="icofont icofont-stock-mobile"></i> */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className={c(Styles.breadcrumb,"breadcrumb")}>
                                <li onClick={handleGoHome} className={c(Styles.breadcrumbItem,"breadcrumb-item")}>
                                Trang chủ /
                                </li>
                                   
                                <li className="breadcrumb-item active">
                                    Tên sản phẩm
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section>
            <div className="container bg-white pt-3">
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <Carousel autoPlay={true} centerSlidePercentage={30} emulateTouch={true}
                        infiniteLoop={true}>
                            {
                                apiProduct.ProductImages.map((item)=>(
                                    <div>
                                        <img src={`https://doantotnghiep.azurewebsites.net/${item.ThumbNailPath}`} alt="image1"/>
                                        <p className="legend">Image 1</p>         
                                    </div>
                                ))
                            }
                        
                       
                        </Carousel>
                    </div>
                    <div className="col-lg-4 col-md-4 pr-sm-0">
                        <div className="shop-detail-right">
                            <div className="pb-3">
                                <div className="product-name">
                                    <h2 className={c(Styles.fontSm23,"font-sm-23")}>{apiProduct.ProductName}</h2>
                                    <div className="row m-0">
                                    {/* style="font-size:16px;" */}
                                        <div className="col-md-6 mt-2 pr-0" style={{fontSize:"16px"}} >
                                                <p className="text-dark font-weight-bold font-14" style={{fontSize:"14px",fontWeight:"bold", marginBottom:0}}>Giá chính hãng</p>
                                                {/* style="font-size:11.5px;padding: 5px 4px;" */}
                                                <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>{(apiProduct.GiaBanLe<apiProduct.OriginPrice)?(saleRice(Number(apiProduct.GiaBanLe),Number(apiProduct.OriginPrice))):''}</span>
                                                {/* style="font-size: 17px;" */}
                                                <span className={c(Styles.textMuted,"text-decoration-line-through text-muted")}>{(apiProduct.OriginPrice+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₫</span>
                                                <p className="text-dark font-weight-bold font-14" style={{fontSize:"14px",fontWeight:"bold", marginBottom:0}}>Giá ưu đãi</p>
                                                {/* style="margin-right:5px;" */}
                                                <span className="text-orange font-weight-bold font-sm-20"  style={{fontSize:"20px",fontWeight:"bold", color:"#ff5106"}}>{((apiProduct.GiaBanLe)+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ</span>

                                        </div>
                                        {/* style="font-size:16px;" */}
                                        <div className="col-md-6 mt-2 pr-0" style={{fontSize:"16px"}} >
                                            <p className="d-flex d-sm-inline-flex"><span className="min-w-100 text-dark " style={{fontSize:"13px",fontWeight:500,marginBottom:0,minWidth:"100px"}}>Thương hiệu:</span> 
                                            <span className="text-blue" style={{fontSize:"13px",fontWeight:500 }}>
                                                <a className="text-decoration-none " href="/san-pham?brand=374">{apiProduct.ProductBrand.BrandName}</a></span> </p>
                                            <p className="d-flex d-sm-inline-flex">
                                                <span className="min-w-100 text-dark" style={{fontSize:"13px", fontWeight:500,minWidth:"100px"}}>Tình trạng: </span>
                                                        <span className="text-blue" style={{color:"#00c8fc", fontSize:"13px",fontWeight:500}}>{(apiProduct.Status)?'Còn hàng':'Đặt hàng'}</span>

                                            </p>
                                           
                                            <p className="d-inline-flex text-dark"><span className="min-w-100" style={{minWidth:"100px"}}><b >Bảo hành: </b></span><span><b>{apiProduct.GurantyTime}</b></span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex d-md-one mt-2">

                                    </div>
                                </div>
                               <div className="d-flex flex-column justify-content-md-start bg-white border-bottom-0 border-top-0 pb-3 mt-2 mb-0">
                                    <div className="d-flex align-items-center flex-column justify-content-start justify-content-md-between mt-4">
                                        <div className="text-center d-flex flex-row h-100 mr-2">
                                            <div className="input-group border quantity-input p-2 px-w-120 px-h-42">
                                                <span onClick={()=>setAmount((amount>1)?amount-1:1)} className="mdi mdi-minus"></span>
                                                <span className="mx-3">{amount}</span>
                                                <span onClick={()=>setAmount(amount+1)} className="mdi mdi-plus"></span>
                                            </div>
                                        </div>
                                        <div className={c(Styles.alignItem,(apiProduct.Status)?"bluebg":"orangebg")}>
                                            <a className={c(Styles.contactRice, "false")} href="tel:0914196139">
                                                <p className="btn btn-gradient-orange text-white font-weight-bold justify-content-center rounded-8px d-flex align-items-center h-100 w-100 m-0">
                                                    Gọi 0914196139 để được giá tốt
                                                </p>
                                            </a>
                                            {/* onClick={()=>handleBuy()} */}
                                            <a  className={c(Styles.contactRice, "true")} href="https://doantotnghiep.azurewebsites.net/gio-hang">
                                                <p className="btn btn-gradient-orange text-white font-weight-bold justify-content-center rounded-8px d-flex align-items-center h-100 w-100 m-0">
                                                    Mua ngay với giá ưu đãi
                                                </p>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="section-header">
                                                <h4 className="text-left text-uppercase mb-0 font-weight-bold text-title-detail-product">&nbsp;</h4>
                                                <hr className="mt-3 m-0"/>
                                            </div>
                                            <div className={c(Styles.listUnset, "list-unset ")} id="pro-detail-hilight">
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row pb-2">
                                <div className="d-inline-block  bg-primary text-white rounded">
                                    <span className="px-1 mdi mdi-hand-pointing-right"></span>
                                    <span className="pe-1">Thích 0</span>
                                </div>
                                <div className="ms-2 d-inline-block  bg-primary text-white rounded">
                                    <span className="px-1 mdi mdi-facebook"></span>
                                    <span className="pe-1">Chia sẻ 0</span>
                                </div>
                            </div>
                            <div className="border rounded">
                                <span className={c(Styles.boderBoteom, "text-uppercase text-center pt-2 d-block ")} style={{color:"#6dbae2",fontSize:"18px",fontWeight:"400" ,borderBottomStyle:"solid", borderBottomColor: "rgb(236, 236, 236)"}}>khuyến mãi</span>  
                                <b className="text-blue px-4 mt-3">Khuyến mãi khác</b>
                                <div className="promotion px-4">
                                    
                                </div>
                            
                            </div>
                            <div className="border rounded">
                                <span className={c(Styles.boderBoteom, "text-uppercase text-center pt-2 d-block ")} style={{color:"#6dbae2",fontSize:"18px",fontWeight:"400" ,borderBottomStyle:"solid", borderBottomColor: "rgb(236, 236, 236)"}}>cam kết vàng</span>  
                                <b className="text-blue px-4 mt-3">Khuyến mãi khác</b>
                                <div className="golden-commitment px-4">
                                    
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* body */}
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-header">
                            <div className={c(" wp-title-box tilte-style-2 text-left")}>
                                
                                    <h2 className={c(Styles.borderLeft," position-relative h2-title-box overflow-hidden")}>
                                        <span className={c(Styles.childBefor , "position-relative ")}>Thông tin sản phẩm
                                        </span>
                                    </h2>
                                    <div className="border p-3 rounded discription" >
                                        {
                                            DOMPurify.sanitize("<p>tét tét tsetstasf askdjhaksjh afshfafa </p>"+"", { USE_PROFILES: { html: true } })
                                            // <p>tét tét tsetstasf askdjhaksjh afshfafa </p>
                                        }
                                    
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="section-header">
                                <div className={c(" wp-title-box tilte-style-2 text-left")}>
                                    
                                        <h2 className={c(Styles.borderLeft," position-relative h2-title-box overflow-hidden")}>
                                            <span className={c(Styles.childBefor , "position-relative ")}>Thông số kỹ thuật
                                            </span>
                                        </h2>

                                        <div className="widget reviews-section-comment mb18 font-13 pl-2 pr-2 border p-3 rounded">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <tbody>
                                {
                                    apiProduct.ProductProperties.map((item)=>(
                                        <tr>
                                                    <td className="min-w-150">{item.Property.PropertyName}</td>
                                                    {
                                                    item.Property.Values.map((item2)=>(
                                                        <td>{item2.Value}</td>
                                                    ))
                                                    }
                                        </tr>
                                    ))
                                }
                                        
                                      
                            </tbody>
                        </table>
                    </div>
                </div>
                                
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="section-header">
                                <div className={c(Styles.carouselProduct," wp-title-box tilte-style-2 text-left ")}>
                                    
                                        <h2 className={c(Styles.borderLeft," position-relative h2-title-box overflow-hidden")}>
                                            <span className={c(Styles.childBefor , "position-relative ")}>SẢN PHẨM TƯƠNG TỰ
                                            </span>
                                        </h2>
                                        <ProductCarousel/>
                                
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div style={{height:"200px"}}>

            </div>
        </>
    )
}