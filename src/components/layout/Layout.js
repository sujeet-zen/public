import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
class Layout extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="flex mainBody">
            <Sidebar />
            <div className="w-full relative">
              {/* <Header /> */}

              <div className="block w-full bg-gray-100">
                <div className=" md:pt-32 pb-32  w-full"></div>
                <div className="px-5 sm:px-10 py-5 w-full">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Layout;
