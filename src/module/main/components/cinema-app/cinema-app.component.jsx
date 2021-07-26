import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CinemaList from "../cinema-list/cinema-list.component";
import Cineplex from "../cineplex/cineplex.component";
import "./cinema-app.styles.scss";
class CinemaApp extends Component {
  render() {
    return (
      <section className="cinemaBlock ">
        <div className="wrapper container">
          <div className="row">
            <div className="col-md-1 ">
              <Cineplex />
            </div>
            <div className="col-md-11 scroll-0">
               <div className="tab-content">
                 <CinemaList />
               </div>
            </div>
          </div>
        </div>
      </section>

      // <section className="cinemaBlock ">
      //   <div className="wrapper container">
      //     <div className="row">
      //       <div className="col-md-1 ">
      //         <ul className="nav nav-pills col-768">
      //           <li className="nav-item">
      //             <a
      //               href="#v-pills-bhd"
      //               className="nav-link active"
      //               data-toggle="pill"
      //             >
      //               <img src="./images/BHD.png " />
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               href="#v-pills-cns"
      //               className="nav-link"
      //               data-toggle="pill"
      //             >
      //               <img src="./images/CNS.png" />
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               href="#v-pills-ddc"
      //               className="nav-link"
      //               data-toggle="pill"
      //             >
      //               <img src="./images/DDC.png" />
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a href="#v-pills-mg" className="nav-link" data-toggle="pill">
      //               <img src="./images/MEGA.png" />
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               href="#v-pills-dcine"
      //               className="nav-link"
      //               data-toggle="pill"
      //             >
      //               <img src="./images/dcine.jpg" />
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               href="#v-pills-lotte"
      //               className="nav-link"
      //               data-toggle="pill"
      //             >
      //               <img src="./images/lotte.png" />
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div className="col-md-11 scroll-0">
      //         <div className="tab-content">
      //           {/* BHD  */}
      //           <div
      //             className="tab-pane active"
      //             id="v-pills-bhd"
      //             role="tabpanel"
      //           >
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-bitexco.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star</span> -
      //                           Bitexco
      //                         </p>
      //                         <p className="address">
      //                           L3-Bitexco Icon 68, 2 Hải Triều, Q1{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-2"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-vincom-thao-dien.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star </span> -
      //                           Vincom Thảo Điền
      //                         </p>
      //                         <p className="address">
      //                           L5-Megamall, 159 XL Hà Nội, Q.2{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-3"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-vincom-3-2.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star </span>- Vincom
      //                           3/2
      //                         </p>
      //                         <p className="address">
      //                           L5-Vincom 3/2, 3C Đường 3/2, Q.10{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-4"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-pham-hung.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star </span> - Phạm
      //                           Hùng
      //                         </p>
      //                         <p className="address">
      //                           L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-5"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-vincom-quang-trung.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star </span> -
      //                           Vincom Quang Trung
      //                         </p>
      //                         <p className="address">
      //                           B1-Vincom QT, 190 Quang Trung, Gò Vấp{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-bhd-cinema-6"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-vincom-le-van-viet.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="green">BHD Star </span> -
      //                           Vincom Lê Văn Việt
      //                         </p>
      //                         <p className="address">
      //                           L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding fixed-scroll">
      //                 <div className="tab-content">
      //                   <div
      //                     className="tab-pane active"
      //                     id="v-pills-bhd-cinema-1"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex ">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/csnm.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Cuộc Sống Nhiệm Màu - Soul -{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 9 - IMDb 8
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:00</span> ~
      //                             14:40
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:55</span> ~
      //                             18:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:05</span> ~
      //                             22:45
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nghề siêu khó - Extreme Job
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 8.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:36
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:35</span> ~
      //                             16:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:15</span> ~
      //                             18:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             21:08
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:30</span> ~
      //                             22:38
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">18:40</span> ~
      //                             14:40
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img src="./images/txt.png" alt="wonderwoman" />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Tay xạ thủ - The MarkSman{" "}
      //                           </p>
      //                           <p className="info">
      //                             107 phút - TIX 6 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">18:40</span> ~
      //                             14:10
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             00:38
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:55</span> ~
      //                             18:46
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:10</span> ~
      //                             20:51
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:50</span> ~
      //                             22:41
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             01:01
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:35</span> ~
      //                             14:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:41
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:50</span> ~
      //                             18:46
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             20:56
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:21:05</span> ~
      //                             23:01
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:22:55</span> ~
      //                             00:51
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane"
      //                     id="v-pills-bhd-cinema-2"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/csnm.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Cuộc Sống Nhiệm Màu - Soul -{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 9 - IMDb 8
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:20</span> ~
      //                             18:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:00</span> ~
      //                             22:15
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:15</span> ~
      //                             22:15
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:50</span> ~
      //                             15:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:05</span> ~
      //                             19:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:30</span> ~
      //                             21:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:55</span> ~
      //                             00:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Thuyền Trưởng Răng Kiếm và Viên Kim Cương Ma
      //                             Thuật - Captain Sabertooth and The Magic
      //                             Diamond
      //                           </p>
      //                           <p className="info">
      //                             82 phút - TIX 7.7 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:45</span> ~
      //                             15:07
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:05</span> ~
      //                             21:27
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img src="./images/txt.png" alt="wonderwoman" />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Tay xạ thủ - The MarkSman{" "}
      //                           </p>
      //                           <p className="info">
      //                             107 phút - TIX 6 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             14:57
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:40</span> ~
      //                             23:27
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">22:40</span> ~
      //                             00:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">P</span>
      //                           <p className="movieTitle">
      //                             Luke Và Chuyến Du Hành Vượt Thời Gian - Time
      //                             Traveler Luke{" "}
      //                           </p>
      //                           <p className="info">
      //                             60 phút - TIX 0 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             17:50
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             20:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-bhd-cinema-3"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/csnm.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Cuộc Sống Nhiệm Màu - Soul -{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 9 - IMDb 8
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:00</span> ~
      //                             13:40
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             15:45
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">16:30</span> ~
      //                             18:10
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:00</span> ~
      //                             19:40
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:55</span> ~
      //                             22:35
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nghề siêu khó - Extreme Job
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 8.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">16:10</span> ~
      //                             18:01
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:15</span> ~
      //                             00:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:45</span>{" "}
      //                             ~00:53
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">18:40</span> ~
      //                             14:40
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane"
      //                     id="v-pills-bhd-cinema-4"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Thuyền Trưởng Răng Kiếm và Viên Kim Cương Ma
      //                             Thuật - Captain Sabertooth and The Magic
      //                             Diamond
      //                           </p>
      //                           <p className="info">
      //                             82 phút - TIX 7.7 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:45</span> ~
      //                             15:07
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:45</span> ~
      //                             14:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             18:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">P</span>
      //                           <p className="movieTitle">
      //                             Luke Và Chuyến Du Hành Vượt Thời Gian - Time
      //                             Traveler Luke{" "}
      //                           </p>
      //                           <p className="info">
      //                             60 phút - TIX 0 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             17:50
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             20:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane"
      //                     id="v-pills-bhd-cinema-5"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/csnm.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Cuộc Sống Nhiệm Màu - Soul -{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 9 - IMDb 8
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:00</span> ~
      //                             00:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img src="./images/txt.png" alt="wonderwoman" />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Tay xạ thủ - The MarkSman{" "}
      //                           </p>
      //                           <p className="info">
      //                             107 phút - TIX 6 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             14:57
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:40</span> ~
      //                             23:27
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:45</span> ~
      //                             14:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             18:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-bhd-cinema-6"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:00</span> ~
      //                             00:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:45</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:50</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:20</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:00</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img src="./images/txt.png" alt="wonderwoman" />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Tay xạ thủ - The MarkSman{" "}
      //                           </p>
      //                           <p className="info">
      //                             107 phút - TIX 6 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">17:10</span>{" "}
      //                             ~18:57
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:45</span> ~
      //                             14:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             18:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/cpma.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Căn Phòng Ma Ám - Stigmatized Properties
      //                           </p>
      //                           <p className="info">
      //                             111 phút - TIX 7.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time"> 18:25</span> ~
      //                             20:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {/* CNS  */}
      //           <div className="tab-pane " id="v-pills-cns" role="tabpanel">
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-cns-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/cnsHBT.jpg"
      //                           className="image"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="pink">CNS</span> - Hai Bà Trưng
      //                         </p>
      //                         <p className="address">
      //                           135 Hai Bà Trưng, Bến Nghé, Q.1{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-cns-cinema-2"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/cnsQT.jpg"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="pink">CNS </span> - Quốc Thanh
      //                         </p>
      //                         <p className="address">271 Nguyễn Trãi, Q.1 </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding ">
      //                 <div className="tab-content" id="v-pills-tabContent">
      //                   <div
      //                     className="tab-pane active"
      //                     id="v-pills-cns-cinema-1"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex ">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:35</span> ~
      //                             16:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:15</span> ~
      //                             18:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             21:08
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:30</span> ~
      //                             22:38
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             00:38
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:35</span> ~
      //                             14:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:41
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:50</span> ~
      //                             18:46
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             20:56
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:21:05</span> ~
      //                             23:01
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:22:55</span> ~
      //                             00:51
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-cns-cinema-2"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:15</span> ~
      //                             13:50
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:15</span> ~
      //                             15:55
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:25
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~
      //                             21:50
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:10</span> ~
      //                             23:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:35</span> ~
      //                             16:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:15</span> ~
      //                             18:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             21:08
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:30</span> ~
      //                             22:38
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">20:30</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:40</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:45</span> ~
      //                             14:21
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             18:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:45</span> ~
      //                             21:21
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:00</span> ~
      //                             22:36
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:30</span> ~
      //                             01:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             00:38
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:35</span> ~
      //                             14:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:41
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:50</span> ~
      //                             18:46
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             20:56
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:21:05</span> ~
      //                             23:01
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:22:55</span> ~
      //                             00:51
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">P</span>
      //                           <p className="movieTitle">
      //                             Luke Và Chuyến Du Hành Vượt Thời Gian - Time
      //                             Traveler Luke{" "}
      //                           </p>
      //                           <p className="info">
      //                             60 phút - TIX 0 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:40</span> ~
      //                             17:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {/* DDC  */}
      //           <div className="tab-pane" id="v-pills-ddc" role="tabpanel">
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-ddc-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/cnsHBT.jpg"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="grey">DDC</span> - Đống Đa
      //                         </p>
      //                         <p className="address">890 Trần Hưng Đạo, Q.5 </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding ">
      //                 <div className="tab-content" id="v-pills-tabContent">
      //                   <div
      //                     className="tab-pane active"
      //                     id="v-pills-ddc-cinema-1"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nữ Thần Chiến Binh 1984 - Wonder Woman 1984{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">17:50</span> ~
      //                             19:30
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:35</span> ~
      //                             16:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:15</span> ~
      //                             18:23
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             00:38
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:35</span> ~
      //                             14:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:45</span> ~
      //                             16:41
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:50</span> ~
      //                             18:46
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             20:56
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:21:05</span> ~
      //                             23:01
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">:22:55</span> ~
      //                             00:51
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {/* MegaGS  */}
      //           <div className="tab-pane" id="v-pills-mg" role="tabpanel">
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-mega-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/cnsHBT.jpg"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="yellow">MegaGS</span> - Cao
      //                           Thắng
      //                         </p>
      //                         <p className="address">19 Cao Thắng, Q.3 </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding ">
      //                 <div className="tab-content" id="v-pills-tabContent">
      //                   <div
      //                     className="tab-pane active"
      //                     id="v-pills-mega-cinema-1"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">18:40</span> ~
      //                             14:40
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {/* DCine  */}
      //           <div className="tab-pane " id="v-pills-dcine" role="tabpanel">
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-dcine-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img src="./images/dcine.jpg" className="image" />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span>DCine</span> - Bến Thành
      //                         </p>
      //                         <p className="address">
      //                           6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding ">
      //                 <div className="tab-content" id="v-pills-tabContent">
      //                   <div
      //                     className="tab-pane active"
      //                     id="v-pills-dcine-cinema-1"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Thợ Săn Quái Vật - Monster Hunter
      //                           </p>
      //                           <p className="info">
      //                             104 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">21:30</span> ~
      //                             23:14
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">23:10</span> ~
      //                             00:38
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:30</span> ~
      //                             13:58
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:35</span> ~
      //                             14:31
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {/* Lotte  */}
      //           <div className="tab-pane" id="v-pills-lotte" role="tabpanel">
      //             <div className="row">
      //               <div className="col-md-4">
      //                 <div className="nav nav-pills " role="tablist">
      //                   <a
      //                     className="nav-link active"
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-1"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/lotte-cinema-phu-tho.jpg"
      //                           className="image"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte </span> - Phú Thọ
      //                         </p>
      //                         <p className="address">
      //                           L4-Lotte Mart Phú Thọ, Q.11{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-2"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/lotte-cinema-nam-sai-gon.jpg"
      //                           className="image"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte </span> - Nam Sài
      //                           Gòn
      //                         </p>
      //                         <p className="address">
      //                           L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-3"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-vincom-3-2.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte Gò Vấy </span>-
      //                           Vincom 3/2
      //                         </p>
      //                         <p className="address">
      //                           L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-4"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/bhd-star-pham-hung.png"
      //                           className="image"
      //                           alt="bhd"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte </span> - Thủ Đức{" "}
      //                         </p>
      //                         <p className="address">
      //                           L2-Joy Citipoint, KCX Linh Trung, Thủ Đức{" "}
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-5"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/lotte-cinema-cong-hoa.jpg"
      //                           className="image"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte </span> - Cộng
      //                           Hòa
      //                         </p>
      //                         <p className="address">
      //                           L4-Pico Plaza, 20 Cộng Hòa, Tân Bình
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                   <a
      //                     className="nav-link "
      //                     data-toggle="pill"
      //                     role="tab"
      //                     href="#v-pills-lotte-cinema-6"
      //                   >
      //                     <div className="details">
      //                       <div className="cinemaImage">
      //                         <img
      //                           src="./images/lotte-cinema-cantavil.jpg"
      //                           className="image"
      //                         />
      //                       </div>
      //                       <div className="describe">
      //                         <p className="title">
      //                           <span className="orange">Lotte </span> -
      //                           Cantavil
      //                         </p>
      //                         <p className="address">
      //                           L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2
      //                         </p>
      //                         <p className="moreInfo">[chi tiết]</p>
      //                       </div>
      //                     </div>
      //                   </a>
      //                 </div>
      //               </div>
      //               <div className="col-md-8 fix-padding fixed-scroll">
      //                 <div className="tab-content">
      //                   <div
      //                     className="tab-pane active show"
      //                     id="v-pills-lotte-cinema-1"
      //                     role="tabpanel"
      //                     aria-selected="false"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:20</span> ~
      //                             14:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:35</span> ~
      //                             16:35
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">16:15</span> ~
      //                             18:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:00</span> ~
      //                             21:08
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:30</span> ~
      //                             22:38
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:55</span> ~
      //                             01:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:50</span> ~
      //                             15:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:05</span> ~
      //                             19:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:30</span> ~
      //                             21:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:55</span> ~
      //                             00:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">P</span>
      //                           <p className="movieTitle">
      //                             Luke Và Chuyến Du Hành Vượt Thời Gian - Time
      //                             Traveler Luke{" "}
      //                           </p>
      //                           <p className="info">
      //                             60 phút - TIX 0 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             16:20
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-lotte-cinema-2"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/gai-gia-lam-chieu-3.jpg"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">C16</span>
      //                           <p className="movieTitle">
      //                             Gái Già Lắm Chiêu 3 - The Royal Bride
      //                           </p>
      //                           <p className="info">
      //                             120 phút - TIX 7.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">16:30</span> ~
      //                             18:10
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">13:50</span> ~
      //                             15:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:05</span> ~
      //                             19:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:30</span> ~
      //                             21:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:55</span> ~
      //                             00:03
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-lotte-cinema-3"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/gai-gia-lam-chieu-3.jpg"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">C16</span>
      //                           <p className="movieTitle">
      //                             Gái Già Lắm Chiêu 3 - The Royal Bride
      //                           </p>
      //                           <p className="info">
      //                             120 phút - TIX 7.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~
      //                             23:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">16:30</span> ~
      //                             18:10
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/doraemon.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Doraemon: Nobita và Những Bạn Khủng Long Mới -
      //                             Doraemon the Movie: Nobita's New Dinosaurs{" "}
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:15</span> ~
      //                             00:23
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:45</span>{" "}
      //                             ~00:53
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/elce.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">'Em' Là Của Em</p>
      //                           <p className="info">
      //                             0 phút - TIX 7.5 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">18:40</span> ~
      //                             14:40
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">116:00</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:25</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span> ~{" "}
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:10</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Doraemon: Nobita và Những Bạn Khủng Long Mới -
      //                             Doraemon the Movie: Nobita's New Dinosaurs{" "}
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-lotte-cinema-4"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/gai-gia-lam-chieu-3.jpg"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">C16</span>
      //                           <p className="movieTitle">
      //                             Gái Già Lắm Chiêu 3 - The Royal Bride
      //                           </p>
      //                           <p className="info">
      //                             120 phút - TIX 7.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:25</span> ~
      //                             23:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nss11.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Nam Sinh Số 11 - The Child Who Would Not Come
      //                           </p>
      //                           <p className="info">
      //                             88 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:45</span> ~
      //                             14:13
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-lotte-cinema-5"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/gai-gia-lam-chieu-3.jpg"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">C16</span>
      //                           <p className="movieTitle">
      //                             Gái Già Lắm Chiêu 3 - The Royal Bride
      //                           </p>
      //                           <p className="info">
      //                             120 phút - TIX 7.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/nu-than-chien-binh.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:00
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:10</span>{" "}
      //                             21:50
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/vtth.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Vùng Trời Tử Thần - Horizon Line
      //                           </p>
      //                           <p className="info">0 phút - TIX 0 - IMDb 0</p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">12:40</span> ~{" "}
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                   <div
      //                     className="tab-pane "
      //                     id="v-pills-lotte-cinema-6"
      //                     role="tabpanel"
      //                   >
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/gai-gia-lam-chieu-3.jpg"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-green">C16</span>
      //                           <p className="movieTitle">
      //                             Gái Già Lắm Chiêu 3 - The Royal Bride
      //                           </p>
      //                           <p className="info">
      //                             120 phút - TIX 7.9 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Lồng tiếng</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:45</span> ~
      //                             13:25
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/chimuoiba.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Chị Mười Ba: 3 Ngày Sinh Tử{" "}
      //                           </p>
      //                           <p className="info">
      //                             100 phút - TIX 7.4 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">14:40</span> ~
      //                             16:20
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/doraemon.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C13</span>
      //                           <p className="movieTitle">
      //                             Doraemon: Nobita và Những Bạn Khủng Long Mới -
      //                             Doraemon the Movie: Nobita's New Dinosaurs{" "}
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/ldgld.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Lừa Đểu Gặp Lừa Đảo - The Con-Heartist
      //                           </p>
      //                           <p className="info">
      //                             128 phút - TIX 8.8 - IMDb 0
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">11:40</span> ~
      //                             13:48
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">13:10</span> ~
      //                             15:18
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">14:05</span> ~
      //                             16:13
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">15:;35</span> ~
      //                             17:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">18:20</span> ~
      //                             20:28
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">19:50</span> ~
      //                             21:58
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">20:35</span> ~
      //                             22:43
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">22:00</span> ~
      //                             00:08
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/banquy.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C16</span>
      //                           <p className="movieTitle">
      //                             Bạn Quỷ - Come Play
      //                           </p>
      //                           <p className="info">
      //                             96 phút - TIX 7.7 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:00</span> ~
      //                             16:56
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                     <div className="details big-details">
      //                       <div className="wrapInfo d-flex">
      //                         <div className="cinemaImage">
      //                           <img
      //                             src="./images/di-nguyen-bi-an.png"
      //                             alt="wonderwoman"
      //                           />
      //                         </div>
      //                         <div className="titleInfo ">
      //                           <span className="bg-red">C18</span>
      //                           <p className="movieTitle">
      //                             Di Nguyện Bí Ẩn - The Day I Died: Unclose Case
      //                           </p>
      //                           <p className="info">
      //                             116 phút - TIX 5.5 - IMDb 0{" "}
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="typeTiming">
      //                         <div className="version">2D Digital</div>
      //                         <div className="session">
      //                           <a href="#">
      //                             <span className="start-time">15:20</span> ~
      //                             17:16
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">17:35</span> ~
      //                             19:31
      //                           </a>
      //                           <a href="#">
      //                             <span className="start-time">21:10</span> ~
      //                             23:06
      //                           </a>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    
    );
  }
}

const useStyles = makeStyles((theme) => ({
  cineplex: {
    border: "1px solid #e2e2e2",
    padding: "0",
    borderRight: "none",
  },
  cinemaList: {
    border: "1px solid #e2e2e2",
  },
  wrapper: {
    maxWidth: "940px",
    margin: "auto",
  },
}));
export default function CinemaApp(props) {
  const classes = useStyles();
  return (
    <section className={classes.wrapper}>
      <Grid container>
        <Grid item md={1} className={classes.cineplex}>
          <Cineplex />
        </Grid>
        <Grid item md={11} className={classes.cinemaList}>
          <CinemaList />
        </Grid>
      </Grid>
    </section>
  );
}
