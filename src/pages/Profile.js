import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";
import NavComponent from "../components/NavComponent";

function Profile() {
  return (
    <>
      <div className="App">
        <header className="">
          <NavComponent />
        </header>
        <main>
          <h2>Ciao</h2>
          <div className="row">
            <div className="col-8 p-0">
              <TabProfile />
            </div>
            <div className="col-4">
              <MySidebar />
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
export default Profile;
