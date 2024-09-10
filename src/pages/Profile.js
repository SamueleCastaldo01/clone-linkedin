import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";
import NavComponent from "../components/NavComponent";
import MyFooter from "../components/MyFooter";
import MyHomeSIdebar from "../components/MyHomeSidebar";
import Experience from "../components/Experience";

function Profile() {
  return (
    <>
      <div className="App">
        <header className=" bg-white">
          <NavComponent />
        </header>
        <main>
          {/* <h2>Ciao</h2> */}
          <div className="row mt-3">
            <div className="col-lg-9 col-sm-12">
              <TabProfile />
              <Experience />
            </div>
            <div className="col-lg-3 d-md-none d-lg-flex flex-column align-items-end">
              <MySidebar />
              <MyHomeSIdebar />
            </div>
          </div>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default Profile;
