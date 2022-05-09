import React from 'react';
import "./Home.css"
import{Carousel} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Carousel interval={800} color={"red"}>
        <Carousel.Item>
          <Link to="/WomenData">
            <img
              className="d-block "
              src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-woman-new/subhome-xmedia-13-2-in//w/860/IMAGE-landscape-116bff2f-9a68-4dbc-9db4-88f1bb7a74e1-default_0.jpg?ts=1648724342119/800x400?text=First slide&bg=373940"
              alt="First slide"
            />{" "}
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ISLAND
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                SUITS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                JOIN LIFE
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ZARA ATHLETICS
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Link to="/LinenPage"><img
            className="d-block"
            src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-new/subhome-xmedia-18-2//w/860/IMAGE-landscape-47c3189b-de72-4c3f-a875-7e5fe122493f-default_0.jpg?ts=1651840697950/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ISLAND
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                SUITS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                JOIN LIFE
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ZARA ATHLETICS
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/KidsData">
            <img
              className="d-block "
              src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-kids-girl/subhome-xmedia-18//w/860/IMAGE-landscape-6fa3f4ce-aa69-49da-aa47-f300ba67b0cc-default_0.jpg?ts=1651833647878/300x200?text=Third slide&bg=20232a"
              alt="Third slide"
            />
          </Link>
          <div className="bottom-nav">
            <div>
              <a className="bottom-nav-a" href="#">
                New
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ISLAND
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                SUITS
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                JOIN LIFE
              </a>
            </div>
            <div>
              <a className="bottom-nav-a" href="#">
                ZARA ATHLETICS
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
