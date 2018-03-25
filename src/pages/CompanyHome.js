import React, { Component } from "react";
import SideBar from "../components/SideBar";
import Listing from "../components/Listing";

let staticSide = {
  firstLetter: "G",
  lastLetter: "V",
  list: [
    {
      name: "Categories",
      url: "/listing/categories"
    },
    {
      name: "Trending",
      url: "/listing/trending"
    },
    {
      name: "Messages",
      url: "/account/messages"
    },
    {
      name: "Jobs",
      url: "/account/jobs"
    }
  ]
};

let fakeListing = [
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    },
    {
        price: 100.00,
        tags: ['food', 'all natural', 'handmade'],
        username:"lucav17",
        description: "example description of what this bio in their instagram is",
        followers: 26000,
        avg: 35,
        posts: 267,
        rating: 4.0
    }
]

class CPHome extends Component {
  render() {
    return (
      <div className="company-hm">
        <div className="side-bar-container">
          <SideBar data={staticSide} />
        </div>
        <div className="listing-container">
          <div className="search-container">
            <small style={{ paddingLeft: "10px" }}>
              Find influencers for your business niche
            </small>
            <div style={{ marginTop: "5px" }} className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Category, tags, description, key words.."
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="listing-inner">
            <Listing data={fakeListing}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CPHome;
