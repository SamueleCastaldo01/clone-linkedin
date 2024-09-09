import TabProfile from "../components/TabProfile";

function Profile() {
  return (
    <>
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h2>NAv</h2>
        <div className="row">
          <div className="col-8 bg--body-secondary">
            <TabProfile />
          </div>
          <div className="col-4 bg-body-secondary">
            <h3>Cosa</h3>
          </div>
        </div>
      </main>
      <footer></footer>
      </div>
    </>
  );
}
export default Profile;
