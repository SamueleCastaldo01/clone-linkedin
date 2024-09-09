import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";

function Profile() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <main>
          <h2>Ciao</h2>
          <div className="row">
            <div className="col-8 bg-black">
              <TabProfile />
            </div>
            <div className="col-4 bg-body-secondary">
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
