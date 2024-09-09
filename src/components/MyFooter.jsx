import { Container, Row, Col, Dropdown } from "react-bootstrap";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";

const MyFooter = () => {
  return (
    <div className="text-center text-lg-start divFooter">
      <Container className="p-4 ">
        <Row>
          <Col lg={9}>
            <Row>
              {/* Section: Links 1 */}
              <Col lg={3} md={6} className="mb-4">
                <a
                  href="https://about.linkedin.com/it-it"
                  className="text-body text-muted"
                >
                  <h6 className="text-muted">Informazioni</h6>
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
                  <h6 className="text-muted">Accessibilità</h6>
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
                  <h6 className="text-muted">Talent Solutions</h6>
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
                        <h6 className="text-body mb-0">Domande?</h6>
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
                        <h6 className="text-body mb-0">
                           Gestisci il tuo account e la tua
                          privacy
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
                        <h6 className="text-body mb-0">
                        
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
      </Container>

      {/* Copyright */}
    </div>
  );
};

export default MyFooter;
