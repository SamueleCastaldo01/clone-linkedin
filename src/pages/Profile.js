import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";
import NavComponent from "../components/NavComponent";
import MyFooter from "../components/MyFooter";
import MyHomeSIdebar from "../components/MyHomeSidebar";
import AttackOnAldo from "../components/AttackOnAldo";

function Profile() {
  return (
    <>
      <div className="App">
        <header className="">
          <NavComponent />
        </header>
        <main>
          {/* <h2>Ciao</h2> */}
          <div className="row mt-3">
            <div className="col-8 p-0">
              <TabProfile />
              <AttackOnAldo />
            </div>
            <div className="col-4">
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
