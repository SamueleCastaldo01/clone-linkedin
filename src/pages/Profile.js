
import MyProfileSidebar from "../components/MyProfileSidebar";
import MyFooter from "../components/MyFooter";


function Profile() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <main>
          <h2>Ciao</h2>
          <div className="row">
            <div className="col-8 bg-black">
              <h2>Ciao</h2>
            </div>
            <div className="col-4 bg-body-secondary">
              <MyProfileSidebar />
            </div>
          </div>
        </main>
        <footer><MyFooter /></footer>
      </div>
    </>
  );
}
export default Profile;
