import React, { Component } from "react";

export const NameContext = React.createContext();

export class NameProvider extends Component {
    constructor(props) {
        super(props);

        let Name = localStorage.getItem("name");

        if (Name === undefined) {
            localStorage.setItem("name", "");
        }

        this.state = {
            bookName: JSON.parse(Name) || ""
        };

        this.searchName = this.searchName.bind(this);
    }

    searchName(name) {
        this.setState({ bookName: name });
    }

    render() {
        localStorage.name = JSON.stringify(this.state.bookName);
        return (
            <NameContext.Provider
                value={{
                    bookName: this.state.bookName,
                    searchName: this.searchName
                }}
            >
                {this.props.children}
            </NameContext.Provider>
        );
    }
}
