import React, { Component } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import { CelebSmallCard, CelebSmallCardCol1, CelebMicroCard } from "../../itemsConfig";

class Celebrity extends Component {

  render() {
    return (
      <div className="main-page-wrapper">
        {/* Celebrity Header */}
        <Navbar className="top-section-div">
          <Navbar.Brand href="#home" className="celeb-heading">
            Celebrity
          </Navbar.Brand>
          <Nav className="mr-auto top-section-nav">
            <Nav.Link className="top-section-links celebrity-hover" href="#world">
              WORLD
            </Nav.Link>
            <Nav.Link className="top-section-links celebrity-hover" href="#people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className="top-section-links celebrity-hover" href="#food">
              FOOD
            </Nav.Link>
            <Nav.Link className="top-section-links celebrity-hover" href="#animal">
              ANIMAL
            </Nav.Link>
          </Nav>
        </Navbar>
        {/* CeleBrity Small Cards */}
        <ul className="row row-wrapper">
          {CelebSmallCard.map(item => {
            return (
              <li key={item.id} className="col-sm-6">
                <Card className="small-cards" key={item.id} >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="card-description">
                    <span
                      className="style-box"
                      style={{ backgroundColor: `${item.backgroundColor}` }}
                    >
                      {item.style}
                    </span>
                    <span className="view-style">
                      <i className="fas fa-eye" />
                      {item.view}
                    </span>
                    <Card.Title className="heading-style">
                      {item.heading}
                    </Card.Title>
                    <span className="card-author-details">
                      {item.authorDetails}
                    </span>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </ul>

        {/* Celebrity Left Card */}
        <div className="row row-wrapper">
          {CelebSmallCardCol1.map(item => {
            return (
              <div key={item.id} className="col-sm-6">
                <Card key={item.id} >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="card-description">
                    <span
                      className="style-box"
                      style={{ backgroundColor: `${item.backgroundColor}` }}
                    >
                      {item.style}
                    </span>
                    <span className="view-style">
                      <i className="fas fa-eye" />
                      {item.view}
                    </span>
                    <Card.Title className="heading-style">
                      {item.heading}
                    </Card.Title>
                    <span className="card-author-details">
                      {item.authorDetails}
                    </span>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

          {/* Celebrity Right Micro Column */}

          <ul className="col-sm-6 micro-cards">
            {CelebMicroCard.map(item => {
              return (
                <li key={item.id} className="micro-col celeb-micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc">{item.description}</p>
                    <span className="micro-author">{item.authorDetails}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Celebrity;
