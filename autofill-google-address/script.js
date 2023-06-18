let cityField = document.querySelectorAll('[data-label="City"]');
let stateField = document.querySelectorAll('[data-label="State"]');
let countryField = document.querySelectorAll('[data-label="Country"]');
let zipCodeField = document.querySelectorAll('[data-label="Zip Code"]');
const loadingOverlay = document.querySelector('.loadingOverlay.bodyOverlay');
let searchInput = document.querySelector('[data-field-type="AddressLine1"]');
let autocomplete = '';

disabledFields(cityField, stateField, countryField, zipCodeField);
autoCompleteAddress();

function preventInput(evt) {
    var characters = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(characters)) || !(/[a-z]/.test(characters))) {
        evt.preventDefault();
    }
}

function pasteTest(evt) {
    window.setTimeout(() => {
        var characters = evt.target.value;
        window.setTimeout(() => {
            if (!(/^\d+$/.test(characters)) || !(/[a-z]/.test(characters))) {
                evt.target.value = evt.target.value.replace(/\D/g, '');
            }
        });
    });
}

function lockedInputField(evt) {
    if (evt.target.dataset.label == 'Suburb/City') {
        evt.target.readOnly = true;
    }
}

function lockedSelectField(evt) {
    evt.target.disabled = true;
}

function disabledFields(cityField, stateField, countryField, zipCodeField) {
    if (cityField) {
        console.log(cityField);
        cityField[0].readOnly = true;
        cityField[0].addEventListener('keypress', this.preventInput);
        cityField[0].addEventListener('paste', this.pasteTest);
        document.addEventListener('click', this.lockedInputField, false);
        document.addEventListener('focusin', this.lockedInputField, false);
        document.addEventListener('focusout', this.lockedInputField, false);
        document.addEventListener('hover', this.lockedInputField, false);
    }

    if (zipCodeField) {
        zipCodeField[0].readOnly = true;
        zipCodeField[0].addEventListener('keypress', this.preventInput);
        zipCodeField[0].addEventListener('paste', this.pasteTest);
        document.addEventListener('click', this.lockedInputField, false);
        document.addEventListener('focusin', this.lockedInputField, false);
        document.addEventListener('focusout', this.lockedInputField, false);
        document.addEventListener('hover', this.lockedInputField, false);
    }

    if (stateField) {
        stateField[0].disabled = true;
        stateField[0].addEventListener('focusin', this.lockedSelectField, false);
        stateField[0].addEventListener('hover', this.lockedSelectField, false);
        stateField[0].addEventListener('click', this.lockedSelectField, false);
    }

    if (countryField) {
        countryField[0].disabled = true;
        countryField[0].addEventListener('focusin', this.lockedSelectField, false);
        countryField[0].addEventListener('hover', this.lockedSelectField, false);
        countryField[0].addEventListener('click', this.lockedSelectField, false);
    }
}

function autoCompleteAddress() {
    autocomplete = new google.maps.places.Autocomplete((searchInput), {
        types: ['geocode']
    });

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const near_place = autocomplete.getPlace();
        console.log(near_place);

        const addressComponent = near_place.address_components;

        let city = '', state = '', country = '', zipCode = '';

        const cityIndex = addressComponent.findIndex(item => item.types[0] == 'locality');
        if (cityIndex > -1) {
            city = addressComponent[cityIndex].long_name;
        }


        const stateIndex = addressComponent.findIndex(item => item.types[0] == 'administrative_area_level_1');
        if (stateIndex > -1) {
            state = addressComponent[stateIndex].long_name;
        }

        const countryIndex = addressComponent.findIndex(item => item.types[0] == 'country');
        if (countryIndex > -1) {
            country = addressComponent[countryIndex].long_name;
        }

        const postalCodeIndex = addressComponent.findIndex(item => item.types[0] == 'postal_code');
        if (postalCodeIndex > -1) {
            zipCode = addressComponent[postalCodeIndex].long_name;
        }



        console.log(city, state, country);

        stateField = document.querySelectorAll('[data-label="State"]');
        countryField = document.querySelectorAll('[data-label="Country"]');

        cityField[0].value = city;
        zipCodeField[0].value = zipCode;


        $('[data-label="Country"]').val(country).trigger('change');
        $('[data-label="State"]').val(state).trigger('change');

        (function () {
            const send = XMLHttpRequest.prototype.send
            XMLHttpRequest.prototype.send = function () {
                this.addEventListener('load', function () {
                    setTimeout(() => {
                        const stateField = document.querySelectorAll('[data-label="State"]');
                        const countryField = document.querySelectorAll('[data-label="Country"]');
                        $('[data-label="State"]').val(state).trigger('change');
                        this.disabledFields(cityField, stateField, countryField, zipCodeField);
                    }, 1000);
                })
                return send.apply(this, arguments)
            }
        })()

    });
}