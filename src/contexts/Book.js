import React, { Component } from "react";

export const BookContext = React.createContext();

export class BookProvider extends Component {
    constructor(props) {
        super(props);

        let Book = localStorage.getItem("book");

        if (Book === undefined) {
            localStorage.setItem("book", "{}");
        }

        this.state = {
            myBook: JSON.parse(Book) || {}
        };

        this.viewBook = this.viewBook.bind(this);
    }

    viewBook(book) {
        this.setState({ myBook: book });
    }

    render() {
        localStorage.book = JSON.stringify(this.state.myBook);
        return (
            <BookContext.Provider
                value={{
                    myBook: this.state.myBook,
                    viewBook: this.viewBook
                }}
            >
                {this.props.children}
            </BookContext.Provider>
        );
    }
}
