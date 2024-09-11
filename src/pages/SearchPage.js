import AttackOnAldo from "../components/AttackOnAldo";
import MyFooter from "../components/MyFooter";
import MyHomeSIdebar from "../components/MyHomeSidebar";
import MySidebar from "../components/MyProfileSidebar";
import NavComponent from "../components/NavComponent";

const SearchPage = () => {
  return (
    <>
      <div className="App">
        <header className=" bg-white">
          <NavComponent />
        </header>
        <main>
          <div className="row mt-3">
            <div className="col-9">
              <AttackOnAldo />
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
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
};
export default SearchPage;
