import { Row, Col, Modal, Dropdown } from "react-bootstrap";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import { useState } from "react";

const FootAldo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className=" py-4 text-center">
      <div className="text-muted d-flex justify-content-center gap-3">
        <a
          href="https://about.linkedin.com/it-it"
          className=" text-decoration-none"
        >
          Informazioni
        </a>
        <a
          href="https://it.linkedin.com/accessibility?"
          className="text-muted text-decoration-none"
        >
          Accessibilità
        </a>
      </div>
      <ul className="list-inline mt-2">
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/help/linkedin/"
            className="text-muted text-decoration-none"
          >
            Centro assistenza
          </a>
        </li>
        &nbsp;
        <li className="list-inline-item">
          <a
            href="https://it.linkedin.com/legal/privacy-policy?"
            className=" text-muted text-decoration-none"
          >
            Privacy e condizioni
          </a>
        </li>
        <li className="list-inline-item mt-2">
          <a
            href="https://www.linkedin.com/help/linkedin/answer/a1342443/"
            className="text-muted text-decoration-none"
          >
            Opzioni per gli annunci pubblicitari
          </a>
        </li>{" "}
        <br />
        <li className="list-inline-item mt-2">
          <a
            href="https://business.linkedin.com/it-it/marketing-solutions/ads-b?"
            className="text-muted text-decoration-none "
          >
            Pubblicità
          </a>
        </li>
        &nbsp;
        <li className="list-inline-item">
          <a
            href="https://business.linkedin.com/grow"
            className="text-muted text-decoration-none"
          >
            Servizi alle aziende
          </a>
        </li>
        <br />
        <li className="list-inline-item mt-2">
          <a
            href="https://mobile.linkedin.com/it-it"
            className="text-muted text-decoration-none"
          >
            Scarica l'app LinkedIn
          </a>
        </li>{" "}
        &nbsp;
        <li className="list-inline-item">
          <a
            href="#!"
            className=" text-decoration-none"
            onClick={handleShowModal}
          >
            Altro
          </a>
        </li>
      </ul>
      <p className="mt-2 text-muted small text-decoration-none">
        <a href="https://www.linkedin.com">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" id="linkedin-logo-blue-xxsmall" aria-hidden="true" role="none" data-supported-dps="56x14" width="70" height="18">
  <g>
    <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.7 2.7 0 0011.89 6V5H10v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a3.23 3.23 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.3 4.3 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.26 4 4 0 010-.49 3.58 3.58 0 013.5-3.65h.26C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.45 1.45 0 00-1.51-1.4h-.08a1.63 1.63 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.45 2.45 0 01-2 .9 3.41 3.41 0 01-3.32-3.5 1.41 1.41 0 010-.2 3.35 3.35 0 013-3.68h.3a2.61 2.61 0 011.9.7zm.15 6.5a1.64 1.64 0 00-1.4-1.84h-.22A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.62 1.62 0 001.63-1.63.81.81 0 00-.01-.22zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2A1.25 1.25 0 1045 4.25 1.25 1.25 0 0046.25 3zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.73 1.73 0 011.54-1.92h.12C51.82 6.8 52 7.94 52 8.73V12h2z" fill="#0a66c2"/>
  </g>
</svg>

        </a>
           &nbsp;Corporation © 2024
      </p>

      {/* Modal for "Altro" */}
      <Modal show={showModal} onHide={handleCloseModal} centered  size="lg"  >
        <Modal.Header closeButton>
        </Modal.Header>
        <div className="text-center text-lg-start divFooter">
      <Row>
        <Col lg={9}>
          <Row>
            {/* Section: Links 1 */}
            <Col lg={3} md={6} className="mb-4">
              <a
                href="https://about.linkedin.com/it-it"
                className="text-body text-muted"
              >
                Informazioni
              </a>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://it.linkedin.com/legal/professional-community-policies?"
                    className="text-body text-muted"
                  >
                    Informativa sulla community professionale
                  </a>
                </li>
                <li>
                  <a
                    href="https://it.linkedin.com/legal/privacy-policy?"
                    className="text-muted text-body"
                  >
                    Privacy e condizioni
                  </a>
                </li>
                <li>
                  <a
                    href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
                    className="text-body text-muted"
                  >
                    Sales Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="https://about.linkedin.com/transparency"
                    className="text-body text-muted"
                  >
                    Centro sicurezza
                  </a>
                </li>
              </ul>
            </Col>

            {/* Section: Links 2 */}
            <Col lg={3} md={6} className="mb-4">
              <a
                href=" https://it.linkedin.com/accessibility?"
                className="text-body text-muted"
              >
                Accessibilità
              </a>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://careers.linkedin.com/ "
                    className="text-body text-muted"
                  >
                    Carriera
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it"
                    className="text-body text-muted"
                  >
                    Opzioni per gli annunci pubblicitari
                  </a>
                </li>
                <li>
                  <a
                    href="https://mobile.linkedin.com/it-it"
                    className="text-body text-muted"
                  >
                    Mobile
                  </a>
                </li>
              </ul>
            </Col>

            {/* Section: Links 3 */}
            <Col lg={3} md={6} className="mb-4">
              <a
                href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"
                className="text-body text-muted"
              >
                Talent Solutions
              </a>
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"
                    className="text-body text-muted"
                  >
                    Soluzioni di marketing
                  </a>
                </li>
                <li>
                  <a
                    href="https://business.linkedin.com/it-it/marketing-solutions/ads-b?trk=n_nav_ads_f&adobe_mc_sdid=SDID%3D4D1F1EDF6702156B-33F83A73F56E0218%7CMCORGID%3D14215E3D5995C57C0A495C55%40AdobeOrg%7CTS%3D1725877938&adobe_mc_ref=https%3A%2F%2Fwww.linkedin.com%2F"
                    className="text-body text-muted"
                  >
                    Pubblicità
                  </a>
                </li>
                <li>
                  <a
                    href="https://business.linkedin.com/grow?&src=li-footer"
                    className="text-body text-muted"
                  >
                    Piccole Imprese
                  </a>
                </li>
              </ul>
            </Col>

            {/* Section: Links 4 */}
            <Col lg={3} md={6} className="mb-4">
              <ul className="list-unstyled">
                <div className="d-flex align-items-start">
                  <HelpIcon className="me-2" />
                  <li>
                    <a
                      href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                      className="text-body"
                    >
                      <h6 className="mb-0">Domande?</h6>
                    </a>
                    <p className="text-muted">
                      Visita il nostro Centro assistenza
                    </p>
                  </li>
                </div>
                <div className="d-flex align-items-start">
                  <SettingsIcon className="me-2" />
                  <li>
                    <a
                      href="https://www.linkedin.com/mypreferences/d/categories/account"
                      className="text-body"
                    >
                      <h6 className="mb-0">
                        Gestisci il tuo account e la tua privacy
                      </h6>
                    </a>
                    <p className="text-muted">Vai alle impostazioni</p>
                  </li>
                </div>
                <div className="d-flex align-items-start">
                  <SecurityIcon className="me-2" />

                  <li>
                    <a
                      href="https://www.linkedin.com/help/linkedin/answer/a1339724"
                      className="text-body"
                    >
                      <h6 className="mb-0">
                        Trasparenza sui contenuti consigliati
                      </h6>
                    </a>
                    <p className="text-muted">
                      Scopri di più sui contenuti consigliati
                    </p>
                  </li>
                </div>
              </ul>
            </Col>
          </Row>
        </Col>

        {/* Language Dropdown */}
        <Col lg={3} className="d-flex align-items-center justify-content-end">
          <Dropdown>
            <p className="mb-0">Seleziona lingua</p>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-language">
              Italiano (Italiano)
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Italiano</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Français</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Español</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Deutsch</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <div>LinkedIn Corporation © 2024</div>

      {/* Copyright */}
    </div>
        
      </Modal>
    </div>
  );
};

export default FootAldo;
