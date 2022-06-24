import Style from "./introduce.module.scss"
import c from "clsx"
import 'bootstrap/dist/css/bootstrap.css';
import "mdi-icons/css/materialdesignicons.min.css";
import Head from 'next/head'
import $ from "jquery";
import { useEffect, useState } from "react";

export default function Introduce(){
    
    useEffect(() => {
       let menu = document.getElementById('menu')
        const callbackshowbtnEvent =()=>{
            if(menu)
            {

                if(window.scrollY>700 )
                {
                    menu.classList.add('fixed-top')
                }else{
                    menu.classList.remove('fixed-top')
                }
            }
        }
        window.addEventListener('scroll',callbackshowbtnEvent)
       
       
      },[])
      const handleShowMenu=()=>{
        const navbarNav= document.getElementById('navbarNav')
        if(navbarNav)
        {
            if(navbarNav.style.display==='block'){
                navbarNav.style.display='none'
            }
            else{
                navbarNav.style.display='block'
            }
            
        }
      }
    return(
        <>

          <div className="w-100 container-fluid">
            <div className="row">
                <div className="col-12" style={{padding:"0"}}>
                    <div className={c(Style.head,"w-100")}>
                        <img className="img-fluid" src={`https://dienmaycongthanh.vn/Upload/System/IMAGE_614_093825_19032021.jpg`}  alt="image1"/>
                        <div className={c(Style.wrapHeadContent,"container")}>
                            <h1 className="display-6 font-weight-bold"><b>Điện Máy Công Thành <br/> Thiết bị điện máy đỉnh cao</b></h1>
                            <p className="px-5 " style={{fontSize:"20px"}}> 
                                Chất lượng ổn định, <br/> nâng tầm dịch vụ
                            </p>
                        </div>
                    </div>
                </div>
   
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className={c(Style.topBody,"container-xl container-fluid")} >
                        <a  className={c(Style.Top,"top d-flex justify-content-between navbar-brand")}href="#">

                            <img className={c(Style.imgTop,"img-fluid")} src={` https://dienmaycongthanh.vn/images/logo.png`}  alt="image1"/>
                        </a>
                        
                        <button onClick={()=>handleShowMenu()} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} aria-current="page" href="#">sản phẩm</a>
                                </li>
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} href="#">khuyến mãi</a>
                                </li>
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} href="#">tin tức</a>
                                </li>
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} href="#"  aria-disabled="true">tuyển dụng</a>
                                </li>
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} href="#"  aria-disabled="true">giới thiệu</a>
                                </li>
                                <li className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                <a className={c(Style.item,"nav-link")} href="#"  aria-disabled="true">liên hệ</a>
                                </li>
                                <li  className={c(Style.itemMenu,"text-uppercase px-2 nav-item")}>
                                    <a className={c(Style.item,"nav-link")} href="#"  aria-disabled="true">báo cáo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
               
                <div className="col-12 col-xl-8 mx-auto">
                    <div className="container p-3 ">
                        <div className={c(Style.ContentWrap ,"mx-auto")}>
                            <p className={c(Style.ContentCulture)}>
                               
                                Văn hoá công ty là nền tảng và trụ cột phát triển, tập hợp và tôn vinh tất cả những yếu tố nhân bản trong kinh doanh, hướng tới sự phát triển hài hoà và bền vững . "Lấy sự hài lòng của khách hàng làm niềm hạnh phúc của chúng ta" - là những gì mà toàn thể cán bộ, nhân viên ĐIỆN MÁY CÔNG THÀNH đang ngày đêm tâm niệm và phấn đấu.
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-8 mx-auto ">
                    <div className="container-xl  p-3 ">
                        <div className={c(Style.visionWrap ,"mx-auto")}>
                            <p className={c(Style.ContentVision)}>
                               
                               <i>Tầm nhìn và sứ mệnh</i>
                                
                            </p>
                            <span className={c(Style.line,"line line-100")}></span>
                        </div>
                        <div className={c(Style.strategyWrap ,"mx-auto")}>
                            <p className={c(Style.ContentStrategy,'text-uppercase d-block mx-auto')}>
                               
                               <i className="d-block w-100">Tầm nhìn chiến lước</i>
                                
                            </p>

                        </div>
                        <p className={c(Style.contentStrategy,"text-center mx-auto")}>
                            <strong>
                            Trở thành một thương hiệu điện máy được nhiều người biết đến trong lĩnh vực phát triển ngành kinh doanh mặt hàng điện tử - điện máy. Thấu hiểu và chiếm lĩnh sự tin tưởng của khách hàng
                            </strong>
                        </p>
                    </div>
                </div>

                <div className="col-xl-6 mx-auto px-5 px-xl-1">
                    <div className="row">
                        <div className="col-md-5">
                                <h2 className={c(Style.fontIn,"font-weight-bold text-center text-hightline w-100")}>Năm 2022</h2>
                                <p> Trở thành thương hiệu điện tử uy tín mang đến cho khách hàng những sản phẩm/dịch vụ điện máy tốt nhất, những
                                    <strong className="" style={{color:"#17a2b8"}}> sản phẩm vượt bậc trên thị trường trong khu vực Đông Nam Bộ </strong></p>
                            </div>
                            <div className="col-md-2">
                            <span className="mdi mdi-chevron-double-right  d-xl-block  d-sm-block " style={{fontSize: "90px" , color:"#17a2b8"}}></span>
                            {/* <i className="mdi mdi-chevron-triple-right text-info d-xl-block d-sm-none d-lg-block d-xl-block d-none" style={{fontSize: "90px"}}></i> */}
                            </div>
                            <div className="col-md-5">
                                <h2 className={c(Style.fontIn,"font-weight-bold text-center text-hightline w-100")}>Năm 2024</h2>
                                <p>Phát triển thêm <strong className="" style={{color:"#17a2b8"}}>2 chuỗi </strong> hệ thống tại khu vực Đông Nam Bộ</p>
                            </div>
                        </div>
                       
                    
                   
                </div>
                <div className="col-xl-7 mx-auto">
                    <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-center text-hightline w-100")}>
                        Sứ mệnh công ty
                    </h5>
                    <p className={c(Style.contentStrategy,"text-center mx-auto")}>
                            <strong>
                            ĐEM ĐẾN DỊCH VỤ HẬU MÃI TỐT NHẤT CHO NHIỀU TẦNG LỚP KHÁCH HÀNG KHÁC NHAU. MANG ĐẾN SỰ HÀI LÒNG CHO KHÁCH HÀNG DỰA TRÊN TRIẾT LÝ "TẬN TÂM PHỤC VỤ"
                            </strong>
                        </p>
                       
                      
                </div>
                <div className="col-xl-12">
                        <div className="col-xl-6 mx-auto mt-4 mt-xl-1">
                            <div className="m-auto text-center">
                                    <img className="img-fluid" src={"https://dienmaycongthanh.vn/Upload/Posts/Capture.PNG"}  alt="image2"/>
                            </div>
                        </div>
                      
                        <div className={c(Style.visionWrap ,"mx-auto pt-3")}>
                            <p className={c(Style.ContentVision,"text-center")} style={{fontSize:'45px'}}>
                               
                               <i className="text-center">Giá trị cốt lõi</i> <br/>
                              <i>Tận tâm - chuyên nghiệp - hiệu quả <span className={c(Style.line,"line line-100")}></span></i>
                                
                            </p>
                            
                        </div>
                        <div className="col-xl-6 mx-auto pt-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={'https://dienmaycongthanh.vn/Upload/Posts/GiaTriCotLoi01.PNG'} alt="img3"/>
                                </div>
                                <div className="col-md-6">
                                    <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-center text-hightline w-100")}>
                                        01.Tận tâm
                                    </h5>
                                    <p>
                                    Điện máy công thành luôn duy trì đạo đức nghề nghiệp và đặt sự hài lòng của khách hàng làm thước đo cho sự trưởng thành và phát triển
                                    </p>
                                    <p>
                                    Theo đó, chúng tôi luôn cố gắng hiểu rõ tâm lý khách hàng, đáp ứng nhu cầu khách hàng, không ngừng cải thiện và nâng cao dịch vụ chăm sóc khách hàng nhằm mang đến cho khách hàng sự hài lòng và thoải mái nhất.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 mx-auto pt-2">
                            <div className="row">
                            <div className="col-md-6">
                                    <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-center text-hightline w-100")}>
                                        02. Chuyên nghiệp
                                    </h5>
                                    <p className={c(Style.contentStrategy," mx-auto")}>
                                        <strong>
                                        Các CBNV tại Điện Máy Công Thành luôn không ngừng học tập, trao đổi chuyên môn, lĩnh hội kinh nghiệm được truyền thụ, luôn nỗ lực vượt qua các khó khăn, thử thách, tuân thủ nội quy và văn hoá của công ty
                                        </strong>
                                    </p>
                       
                                    <p>
                                    Nhân viên luôn duy trì sự ổn định trong công việc kể cả trong môi trường nhiều áp lực.
                                    </p>
                                    <p>
                                    Đặc biệt, Điện Máy Công Thành đặt sự tín nhiệm của khách hàng lên vị trí hàng đầu, xem chữ Tín là yếu tố quyết định sự thành công và tính chuyên nghiệp của hoạt động kinh doanh


                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid" src={'https://dienmaycongthanh.vn/Upload/Posts/GiaTriCotLoi02.PNG'} alt="img3"/>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-xl-6 mx-auto pt-2 mb-4 mb-xl-1">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={'https://dienmaycongthanh.vn/Upload/Posts/GiaTriCotLoi03.PNG'} alt="img3"/>
                                </div>
                                <div className="col-md-6">
                                    <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-center text-hightline w-100")}>
                                        03. Hiệu quả
                                    </h5>
                                    <p className={c(Style.contentStrategy," mx-auto align-middle")}>
                                        <strong>
                                        Điện Máy Công Thành xem hiệu quả công việc là thành tố quan trọng và quyết định khi thực hiện các hoạt động kinh doanh, đầu tư và phát triển mở rộng.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={c(Style.visionWrap ,"mx-auto pt-3 text-center")}>
                            <p className={c(Style.ContentVision,"text-center")} style={{fontSize:'45px'}}>
                               
                               <i className="text-center">Sơ đồ tổ chức</i> <br/>
                              <i style={{fontSize:"60px"}}>Nhân lực <span className={c(Style.line,"line line-100")}></span></i>
                                
                            </p>
                            
                        </div>
                        <div className={'col-xl-6 mx-auto'}>

                            <img className="img-fluid" src={'https://dienmaycongthanh.vn/Upload/Posts/SoDoToChucNhanLuc.PNG'} alt="img5" />
                            <p className={c(" mx-auto d-block w-100") } style={{ color: "#17a2b8"}}>
                                        <strong>
                                        Điện máy công thành luôn xem nguồn lực con người là yếu tố quyết định tới sự hài lòng về dịch vụ và sản phẩm của doanh nghiệp. Vì chúng tôi hiểu: "Tài sản quý nhất của các doanh nghiệp chính là con người phù hợp"
                                        </strong>
                            </p>
                            <p className="text-center" style={{fontWeight:'400', color:'#868e96!'}}>(Matsushita Konosuke - Ông tổ của phương thức kinh doanh kiểu nhật)</p>
                            <div className={c("m-100 mx-auto text-center")}>

                                <a href="https://dienmaycongthanh.vn/gioi-thieu-dien-may-cong-thanh" className={c(Style.btnMove," position-relative mx-auto text-center btn-b aos-init")}>Tìm hiểu thêm</a>
                            </div>
                            <div className={c(Style.visionWrap ,"mx-auto pt-3")}>
                            <p className={c(Style.ContentVision,"text-center")} style={{fontSize:'60px'}}>
                               
                               <i className="text-center">Quá trình hình thành và phát triển</i> <br/>
                              <i className="font-weight-bold">Tổng quán<span className={c(Style.line,"line line-100")}></span></i>
                                
                            </p>
                            
                        </div>
                       
                        </div>
                        <div className="col-xl-6 mx-auto pt-2  px-md-5 px-1 px-xl-1">
                            <div className="row">
                                {/*  */}
                                <div className="col-md-6">
                                <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-left text-hightline w-100")} style={{textAlign:'left'}}>
                                        1990 - 1994
                                    </h5>
                                    <p>
                                    Thành lập cơ sở sửa chữa và lắp ráp đồ điện tử, nhận sửa tivi và đồ gia dụng tại nhà hoặc cửa hàng
                                    </p>
                                    <p className={c(Style.contentStrategy," mx-auto")}>
                                        <strong>
                                        Các CBNV tại Điện Máy Công Thành luôn không ngừng học tập, trao đổi chuyên môn, lĩnh hội kinh nghiệm được truyền thụ, luôn nỗ lực vượt qua các khó khăn, thử thách, tuân thủ nội quy và văn hoá của công ty
                                        </strong>
                                    </p>
                                    <p>
                                        Mở rộng kinh doanh, đào tạo học viên. Nhận sửa chữa,...
                                    </p>
                                    <p>
                                        Số lượng nhân sự lúc đầu chỉ 6 người và một số học viên
                                    </p>
                                </div>
                                <div className="col-md-1">
                                        <div className={c(Style.around)}>
                                        </div>
                                </div>
                                {/* // */}
                                <div className="col-md-6 ">

                                </div>
                                <div className="col-md-1">
                                        <div className={c(Style.around)}>
                                        </div>
                                </div>
                                <div className="col-md-5">
                                <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-left text-hightline w-100")} style={{textAlign:'left'}}>
                                        1994 - 1998
                                    </h5>
                                    <p>
                                        Tiếp tục mở rộng kinh doanh tivi, đầu máy, dàn karaoke và đào tạo học viên
                                    </p>
                                    <p className={c(Style.contentStrategy," mx-auto")}>
                                        <strong>
                                        Tiếp tục mở rộng kinh doanh tivi, đầu máy, dàn karaoke và đào tạo học viên  </strong>
                                    </p>
                                    <p>
                                    Ký hợp đồng làm đại lý chích thức: Sony, Panasonic, Hitachi,...
                                    </p>
                                    <p>
                                    Ký hợp đồng làm đại lý chích thức: Sony, Panasonic, Hitachi,...
                                    </p>
                                </div>
                                {/*  */}
                                <div className="col-md-6">
                                <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-left text-hightline w-100")} style={{textAlign:'left'}}>
                                        2004 - 2010
                                    </h5>
                                    <p className={c(Style.contentStrategy," mx-auto")}>
                                        <strong>
                                        Năm 2004: Xây lại cửa hàng mới, có không gian và diện tích rộng hơn. Mở rộng khu vực trưng bày sản phẩm  </strong>
                                    </p>
                                    <p>
                                    Chuyển đổi hướng kinh doanh mua bán các mặt hàng điện tử mới nguyên thùng: tivi, đầu máy,dàn karaoke,...   </p>
                                    
                                    <p>
                                    Tiếp tục làm đại lý chính thức hãng cũ: Sony, LG, Toshiba,...    </p>
                                    <p>
                                    Số lượng nhân sự: 12 người. Chưa xây dựng cơ cấu phòng ban   </p>
                                </div>
                                <div className="col-md-1">
                                        <div className={c(Style.around)}>
                                        </div>
                                </div>
                                {/* // */}
                                <div className="col-md-6 ">

                                </div>
                                <div className="col-md-1">
                                        <div className={c(Style.around)}>
                                        </div>
                                </div>
                                <div className="col-md-5">
                                <h5 className={c(Style.fontIn, Style.mission,"text-upercase font-weight-bold text-left text-hightline w-100")} style={{textAlign:'left'}}>
                                        2010 - nay
                                    </h5>
                                    <p>
                                    Tiếp tục phát triển mở rộng kinh doanh các mặt hàng: Điện Máy – Điện Lạnh – Điện Gia Dụng.    </p>
                                   
                                    <p>
                                    Trở thành đại lý chính thức uy tín cho các công ty: Aqua, Panasonic, Sony, Samsung, LG, Hitachi,Toshiba,... </p>
                                    <p className={c(Style.contentStrategy," mx-auto")}>
                                        <strong>
                                        Năm 2015: Thành lập Công ty TNHH MTV TM-DV Điện Máy Công Thành vốn điều lệ 3 tỷ đồng.  </strong>
                                    </p>
                                    <p>
                                 Cơ cấu nhân sự trong công ty phát triển lên hơn 30 người, hình thành các bộ phận với trách nhiệm và quyền hạn rõ ràng </p>
                                </div>
                                <div className={c(Style.visionWrap ,"mx-auto pt-3")}>
                                    <p className={c(Style.ContentVision,"text-left")} style={{fontSize:'60px'}}>
                                    
                                    
                                    <i className="font-weight-bold">Sản phẩm & Dịch vụ <span className={c(Style.line,"line line-100")}></span></i>
                                        
                                    </p>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-center px-h-85" style={{backgroundColor: "white",color: "#2b3d69"}}>
                                            <p className={c(Style.fontIn,Style.mission,"text-hightline-dv text-uppercase text-center font-weight-bold")} style={{fontSize:"24px"}}>Sản phẩm điện máy</p>
                                        </div>
                                        <div className={c("card-body px-h-220 pb-5")} style={{color:"#777"}}>
                                            <p className="card-text">Điện máy công thành chuyên cung cấp các sản phẩm điện máy uy tiến đên từ các thương hiệu</p>
                                            <p className="card-text">Tivi: Sony, Samsung, Toshiba, Akino, Sharp, LG, Asazo,...</p>
                                            <p className="card-text">Với các chương trình bảo hành, khuyến mãi chính hãng, tương đương với các siêu thị điện máy khác.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-center px-h-85" style={{backgroundColor: "white",color: "#2b3d69"}}>
                                            <p className={c(Style.fontIn,Style.mission,"text-hightline-dv text-uppercase text-center font-weight-bold")} style={{fontSize:"24px"}}>Sản phẩm điện lạnh</p>
                                        </div>
                                        <div className={c("card-body px-h-220 pb-5")} style={{color:"##777"}}>
                                            <p className="card-text">Máy lạnh: Aqua, LG, Daikin, Panasonic, Toshiba, Beko,...</p>
                                            <p className="card-text">Tủ lạnh: Aqua, Hitachi, Panasonic, Toshiba, Beko, Sharp, LG,...</p>
                                            <p className="card-text">Máy giặt: Aqua, Panasonic, Toshiba, Beko, Electrolux, Sharp,...</p>
                                            <p className="card-text">Máy sấy: Aqua, Sharp, Electrolux, Beko, LG,...</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="mt-xl-2 col-md-6">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-center px-h-85" style={{backgroundColor: "white",color: "#2b3d69"}}>
                                            <p className={c(Style.fontIn,Style.mission,"text-hightline-dv text-uppercase text-center font-weiht-bold")} style={{fontSize:"24px"}}>DỊCH VỤ SỬA CHỮA, BẢO TRÌ THIẾT BỊ, LẮP ĐẶT THI CÔNG CÔNG TRÌNH BƠM GAS, VỆ SINH ĐIỆN LẠNH</p>
                                        </div>
                                        <div className={c("card-body px-h-220 pb-5")} style={{color:"#777"}}>
                                            <p className="card-text">Điện Máy Công Thành là trung tâm bảo hành và sửa chữa thiết bị hàng đầu tại Đồng Nai với hơn 20 năm kinh nghiệm.</p>
                                            <p className="card-text">Là đại lý uỷ quyền đầu tiên của hãng: Sunhouse, Elmich tại khu vực.</p>
                                            <p className="card-text">Quy trình chặt chẽ chuyên nghiệp. Phát triển nhân lực thực hiện nhiều công trình lớn, đáp ứng nhu cầu người tiêu dùng.</p>
               
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="mt-2 col-md-6">
                                    <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-center px-h-85" style={{backgroundColor: "white",color: "#2b3d69"}}>
                                            <p className={c(Style.fontIn,Style.mission,"text-hightline-dv text-uppercase text-center font-weiht-bold")} style={{fontSize:"24px"}}>
                                            DỊCH VỤ THU HỘ VÀ HỖ TRỢ TRẢ GÓP
                                                </p>
                                        </div>
                                        <div className={c("card-body px-h-220 pb-5")} style={{color:"#777"}}>
                                            <p className="card-text">Với hệ thống Payoo có thể giải quyết nhanh chóng và an toàn mọi nỗi lo âu với các hoá đơn: tiền điện, tiền nước, tài chính,...</p>
                                            <p className="card-text">Hỗ trợ thanh toán bằng nhiều hình thức khác nhau</p>
                                            <p className="card-text">Hỗ trợ trả góp: Ưu đãi hấp dẫn và xét duyệt hồ sơ nhanh chóng với nhiều ngân hàng liên kết: HDSaigon, HomeCredit, ACS, ...

</p>
               
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="co-xl-12 mt-md-4">
                                    <iframe className="w-100" height="600" src="https://www.youtube.com/embed/15IDjmocpAs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                </div>
                                <div className={c(Style.visionWrap ,"mx-auto pt-3")}>
                                    <p className={c(Style.ContentVision,"text-left")} style={{fontSize:'60px'}}>
                                    
                                    
                                    <i className="font-weight-bold">Thành tựu</i>
                                        
                                    </p>
                                    
                                </div>
                                <div className="col-md-12">
                                    <img className="img-fluid" src="https://dienmaycongthanh.vn/Upload/Posts/thanh_tuu.png" alt="asd" />
                                </div>
                            </div>
                        </div>
                </div>
              
            </div>
          </div>
          <footer className={c(Style.footerWrap ,'mt-4')}>
                <div className="container-fluid px-xl-5 py-xl-4">
                    <div className="row px-md-5">
                        <div className="col-12 col-xl-6">
                            <div className="w-100">
                                <div className="row text-light">
                                    <div className={c(Style.contactWrap,'col-md-6')} >
                                        <h4 className="text-upercase">liên hệ</h4>
                                        <p className="text-upercase">điện máy công thành</p>
                                        <p>Địa chỉ: Số 12, đường CMT8, KP 4, Phường Thanh Bình, Thành phố Biên Hòa, TỈnh Đồng Nai</p>
                                        <p>MST: 36033196139</p>
                                        <p>Hotline: 0847800800</p>
                                        <p>Email: dienmaycongthanh@gmail.com</p>
                                    </div>
                                    
                                    <div className={c(Style.contactWrap,'col-md-6')}>
                                        <h4 className="text-upercase">quy định & chính sách</h4>
                                        <p className="text-upercase">Chính sách Bảo hành</p>
                                        <p>Chính sách trả góp</p>
                                        <p>Chính sách vậ chuyển và giao hàng</p>
                                        <p>Thông tin về các phương thức thanh toán</p>
                                        <p>Chính sách bảo vệ thông tin khách hàng</p>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-12 col-xl-6">
                        <div className="row">
                            <div className="col-md-4">
                                <a>
                                    <img className="img-fluid img-bo-cong-thuong mb-2 mt-2" src="https://dienmaycongthanh.vn/images/dathongbao_bocongthuong.png" alt=""/>
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="footer-widget">
                                    <h4 className="block-title text-light"> Bản đồ</h4>
                                    <div className="textwidget">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.2175248098133!2d106.81497171526101!3d10.946934559015506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deacc5555555%3A0x16d3513b12f8f7d5!2zVHJ1bmcgVMOibSDEkGnhu4duIE3DoXkgQ8O0bmcgVGjDoG5o!5e0!3m2!1sen!2s!4v1615459760401!5m2!1sen!2s" width="600" height="200"
                                                 style={{border:0, width: "100%"}}  loading="lazy"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
          </footer>
        </>
    )
}