import React from "react";
import Header from "../../module/main/components/header/header.component";
import Footer from "../../module/main/components/footer/footer";

function MainTemplate(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default MainTemplate;
