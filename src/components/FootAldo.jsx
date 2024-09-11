import { Col, Row } from "react-bootstrap";

const FootAldo = () => {
  return (
    <div className="text-center text-lg-start divFooter">
      <Row>
        <Col lg={12}>
          <Row className="justify-content-around">
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
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default FootAldo;
