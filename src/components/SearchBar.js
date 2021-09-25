import React from 'react'

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={ e => this.setState({ term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

// vjmjNWUg18iOdr8h6bObFRl79OL1PmZBMfvcOGrHuic  <-- Access Key

//3dugDKNSwyYP0fyeTaXE77_uaS-SqIdKR71nlmS8J7A <--- Secret Key
