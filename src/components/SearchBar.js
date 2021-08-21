import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormatSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormatSubmit} className='ui form'>
          <div className='field'>
            <label>Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
