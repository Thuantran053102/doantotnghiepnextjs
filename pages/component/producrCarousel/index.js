import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./productCarousel.module.scss"
import c from "clsx"
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'

export default function ProductCarousel(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return(
        <>
         <Head>
           
            <link rel="stylesheet" href='/globals.css'/>
          </Head>
          <div className=" p-3 rounded ">
            <Carousel
             swipeable={true}
            //  customTransition="all .5"
              // transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
             draggable={true} responsive={responsive} ssr={true} infinite={true}>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" style={{width:"18rem"}}>
                    <img src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <p className="card-text">Máy Lạnh Casper 1.0Hp LC-09FS32</p>
                      <p><b>Giá chính hãng</b></p>
                      <span className={c(Styles.productdetailBgOrange,"productdetail-bg-orange")}>-70%</span>
                      <span className={c(Styles.textMuted," ms-1 text-decoration-line-through text-muted")}>529,000₫</span>
                      <p style={{margin:"0px"}}><b>Giá ưu đãi</b></p>
                      <span style={{ color:"#ff5106"}}><b style={{fontSize:"22px"}}>6,430,000</b><b><u>đ</u></b></span>
                      <p><b>Giá ưu đãi: 24 tháng</b></p>
                    </div>
                  </div>
                </div>
              
            </Carousel>
          </div>
        </>
    )
  }