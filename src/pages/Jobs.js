import AldoSidebar from "../components/AldoSidebar";
import AllAldoPost from "../components/AllAldoPost";
import FootAldo from "../components/FootAldo";
import JobSection from "../components/JobsSection";
import MyHomeSIdebar from "../components/MyHomeSidebar";
import NavComponent from "../components/NavComponent";
import NewAldoPost from "../components/NewAldoPost";

const Jobs = () => {
    return (
        <>
            <div className="App">
                <header className=" bg-white">
                    <NavComponent />
                </header>
                <main>
                    <div className="row mt-3">
                        <div className="col-3">
                            <AldoSidebar />
                        </div>
                        <div className="col-6">
                            <JobSection />
                        </div>
                        <div className="col-3 d-flex flex-column align-items-end">
                            <MyHomeSIdebar />
                            <FootAldo />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
export default Jobs