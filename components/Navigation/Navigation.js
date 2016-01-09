/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';
import Segment from 'Segment';

function Navigation() {
  return (
    <div className="NavBar">
      <div className="NavMenu">
        <div id="menu-icon-wrapper" class="menu-icon-wrapper">
            <svg width="100px" height="100px">
                <path id="pathA" d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"/>
                <path id="pathB" d="M 30 50 L 70 50"/>
                <path id="pathC" d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"/>
            </svg>
            <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
        </div>
      </div>
      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/blog" onClick={Link.handleClick}>Blog</a>
        </li>
      </ul>

    </div>
  );
}

var myPath = document.getElementById("navIcon"),
    segment = new Segment(myPath);

  // Draw a segment of a stroke at the time you want
  // Syntax: .draw(begin, end[, duration, options])
  segment.draw("25%", "75% - 10", 1);

  /* Full example with all possible options */

  // Define a normalized easing function (t parameter will be in the range [0, 1])
  function cubicIn(t) {
      return t * t * t;
  }

  // Define a callback function
  function done() {
      alert("Done!");
  }

  // Draw the complete path
  segment.draw(0, "100%", 1, {delay: 1, easing: cubicIn, callback: done});

export default Navigation;
