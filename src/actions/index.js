export function selectButton(button){
  return {
    type: 'SELECT_BUTTON',
    selectedButton: button
  };
};

export function setSelectedCountry(country){
  return {
    type: 'SET_SELECTED_COUNTRY',
    selectedCountry: country
  }
}

export function setCountryListOpen(open){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: open
  }
}
