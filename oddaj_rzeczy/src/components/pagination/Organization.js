import React from "react";

class Organization extends React.Component {
  constructor() {
    super();
    this.state = {
      foundations: [
        "Organizacja nr 1",
        "Organizacja nr 2",
        "Organizacja nr 3",
        "Organizacja nr 4",
        "Organizacja nr 5",
        "Organizacja nr 6",
      ],
      currentPage: 1,
      foundationsPerPage: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { foundations, currentPage, foundationsPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastFoundation = currentPage * foundationsPerPage;
    const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
    const currentFoundation = foundations.slice(
      indexOfFirstFoundation,
      indexOfLastFoundation
    );

    const renderFoundations = currentFoundation.map((foundation, index) => {
      return (
        <li className="found" key={index}>
          <div className="found-title">
            <h4>{foundation}</h4>
            <span>Cel i misja fundacji</span>
          </div>
          <div className="found-desc">
            <p>Rzeczy, które możesz tu przekazać</p>
          </div>
        </li>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(foundations.length / foundationsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <>
        <ul id="page-content">{renderFoundations}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </>
    );
  }
}
export default Organization;
