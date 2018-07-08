import React from 'react';
import cx from 'classnames';

const countries = ['Belgium', 'France', 'Germany', 'Holland', 'Ireland', 'Italy', 'Luxemburg', 'Portugal', 'Spain'];

class CountrySelector extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: '',
      countryListOpen: false
    }

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  selectCountry(country){
    this.setState({
      selectedCountry: country,
      countryListOpen: false
    })
  }

  handleFocus(event){
    this.setState({
      countryListOpen: true
    });
  }

  handleBlur(event){
    this.setState({
      countryListOpen: false
    });
  }

  render(){
    const listClasses = cx('country-input__list',  {
      'country-input__list--visible': this.state.countryListOpen
    });

    return (
      <div className="country-input">
        <input
          type="text"
          className="country-input__field"
          value={this.state.selectedCountry}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div className={listClasses}>
          <ul>
            {countries.map( country => {
              return <li key={country} onMouseDown={() => this.selectCountry(country)}>{country}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountrySelector;
