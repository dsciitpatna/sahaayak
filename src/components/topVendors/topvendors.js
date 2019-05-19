import React, { Component, Fragment } from "react";
import "./topVendors.css";

class Topvendors extends Component {
  render() {
    return (
      <div>
        <h1>Top Vendors</h1>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>

        <div className="vendor">
          <div className="profile">
            <img src="https://picsum.photos/200" />
            <h2>Name</h2>
          </div>
          <h3>Service Name</h3>
          <div className="stars" data-rating="3">
            <span className={this.getClass(1)} id="1">
              &nbsp;
            </span>
            <span className={this.getClass(2)} id="2">
              &nbsp;
            </span>
            <span className={this.getClass(3)} id="3">
              &nbsp;
            </span>
            <span className={this.getClass(4)} id="4">
              &nbsp;
            </span>
            <span className={this.getClass(5)} id="5">
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    );
  }

  //this function decide how many stars needs to be filled
  getClass(id) {
    let rating = 4; //this value tells no. of stars filled
    if (id <= rating) {
      return "star rated";
    } else {
      return "star";
    }
  }
}

export default Topvendors;
