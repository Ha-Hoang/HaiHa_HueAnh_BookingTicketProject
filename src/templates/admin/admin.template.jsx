import React from "react";

function AdminTemplate(props) {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <h1>SideBar</h1>
        </div>
        <div className="col-9">
          <header>
            <h1>header</h1>
          </header>
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
}

export default AdminTemplate;
