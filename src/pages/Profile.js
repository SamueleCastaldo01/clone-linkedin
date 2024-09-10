import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";
import NavComponent from "../components/NavComponent";
import MyFooter from "../components/MyFooter";
import MyHomeSIdebar from "../components/MyHomeSidebar";

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
            <div className="col-9">
              <TabProfile />
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
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
