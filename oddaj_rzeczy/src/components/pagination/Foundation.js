import React from "react";

class Foundation extends React.Component {
  constructor() {
    super();
    this.state = {
      foundations: [
        "Fundacja nr 1",
        "Fundacja nr 2",
        "Fundacja nr 3",
        "Fundacja nr 4",
        "Fundacja nr 5",
        "Fundacja nr 6",
        "Fundacja nr 7",
        "Fundacja nr 8",
        "Fundacja nr 9",
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
export default Foundation;
