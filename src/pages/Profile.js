<<<<<<< HEAD
import NavComponent from "../components/NavComponet";
=======
import TabProfile from "../components/TabProfile";
import MySidebar from "../components/MyProfileSidebar";
>>>>>>> master

function Profile() {
  return (
    <>
<<<<<<< HEAD
    <div className="App">
      <header className="App-header"><NavComponent/></header>
      <main>
        <h2>Ciao</h2>
        <div className="row">
          <div className="col-8 bg-black">
            <h2>Ciao</h2>
=======
      <div className="App">
        <header className="App-header"></header>
        <main>
          <h2>Ciao</h2>
          <div className="row">
            <div className="col-8 p-0">
              <TabProfile />
            </div>
            <div className="col-4">
                <MySidebar />
            </div>
>>>>>>> master
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
export default Profile;
