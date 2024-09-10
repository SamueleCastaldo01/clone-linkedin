import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function Experience() {
  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
            <h5 className="fw-bold m-0 p-0">Esperienza</h5>
            </div>
          <div>
            <IconButton aria-label="delete">
              <AddIcon style={{color: "black", fontSize: "30px" }}/>
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon style={{color: "black", fontSize: "30px" }}/>
            </IconButton>
          </div>
        </div>

        <div>
          <h6 className="m-0 fw-bold">Ruolo</h6>
          <p className="m-0">Area</p>
          <p className="m-0">Data inizio- Data fine</p>
          <p className="m-0">Company</p>
          <hr></hr>
        </div>
      </div>
    </>
  );
}
export default Experience;
