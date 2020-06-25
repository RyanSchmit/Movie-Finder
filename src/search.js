import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div>
              <input type="text" placeholder="Search.."/>
              <h2 className="genre">Genre</h2>
              <form id="genre">
                <select>
                  <option value="comedy">Comedy</option>
                  <option value="horror">Horror</option>
                  <option value="action">Action</option>
                  <option value="science fiction">Science Fiction</option>
                </select>
              </form> 
              <div className="slidecontainer">
                <h2>Year:<span id="demo"></span></h2>
                <input type="range" min="1970" max="2019" value="50" className="slider" id="myRange"/>
              </div>
              <div>
              <h2>Rating:<span id="rate"></span></h2>
              <input type="range" min="0" max="10" value="50" class="slider" id="myRate"/>
                  <select>
                    <option value="G">G</option>
                    <option value="PG or below">PG or below</option>
                    <option value="PG-13 or below">PG-13 or below</option>
                    <option value="R or below">R or below</option>
                  </select>
              </div>
              <a>Search</a>
            </div>
        )
    }
}

export default Search