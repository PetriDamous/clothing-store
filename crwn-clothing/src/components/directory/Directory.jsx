import React, { Component } from "react";

import sections from "../../data/directory.data";
import "./styles/directory.styles.scss";

import MenuItem from "../menu-item/MenuItem";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections,
    };
  }
  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
