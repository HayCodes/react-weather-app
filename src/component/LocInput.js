import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function LocationSearchInput() {
  const [address, setAddress] = React.useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    console.log(latLng);
  };

  // 473bee0ee0cb4dd89bb7f9b0373c3b90 - API KEY

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input {...getInputProps({ placeholder: "Type location" })} />
          <div>
            {loading ? <div>...loading</div> : null}

            {suggestions.map(suggestion => {
              const style = suggestion.active
                ? { backgroundColor: "#41b6e6" }
                : { backgroundColor: "#fff" };

              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}