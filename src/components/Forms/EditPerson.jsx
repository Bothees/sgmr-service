/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import axios from 'axios';

// App imports
import Auth from 'Auth';
import CreatePerson from 'CreatePerson';
import { formatDate } from 'Utils/date';
import { PEOPLE_URL } from 'Constants/ApiConstants';
import { PEOPLE_PAGE_URL } from 'Constants/ClientConstants';
import { personValidationRules } from 'validation';
import ScrollToTop from 'ScrollToTop';


const EditPerson = (props) => {
  const history = useHistory();
  const personId = props.location.state.peopleId;
  const [personData, setPersonData] = useState();
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState({});

  // Reformat dates & peopleType into individual items for form field display
  const reformatFields = (data) => {
    const [dateOfBirthYear, dateOfBirthMonth, dateOfBirthDay] = data.dateOfBirth.split('-');
    const [documentExpiryDateYear, documentExpiryDateMonth, documentExpiryDateDay] = data.documentExpiryDate.split('-');

    const formattedFields = {
      dateOfBirthYear,
      dateOfBirthMonth,
      dateOfBirthDay,
      documentExpiryDateYear,
      documentExpiryDateMonth,
      documentExpiryDateDay,
      peopleType: data.peopleType.name,
    };
    setPersonData({ ...data, ...formattedFields });
  };


  // Get data to prepopulate the form for this person
  const getPersonData = () => {
    axios.get(`${PEOPLE_URL}/${personId}`, {
      headers: { Authorization: `Bearer ${Auth.retrieveToken()}` },
    })
      .then((resp) => {
        setPersonData(resp.data);
        reformatFields(resp.data);
        localStorage.setItem('data', JSON.stringify(resp.data));
      })
      .catch((err) => {
        if (err.response) {
          switch (err.response.status) {
            case 401: history.push('/sign-in?source=people'); break;
            case 422: history.push('/sign-in?source=people'); break;
            case 405: history.push('/sign-in?source=people'); break;
            default: history.push('/sign-in?source=people');
          }
        }
      });
  };

  // Clear formData from localStorage
  const clearLocalStorage = () => {
    setPersonData({});
    setFormData({});
    setErrors({ });
  };

  // Clear errors
  const removeError = (fieldName) => {
    const tempArr = { ...errors };
    // Check for grouped fields
    let thisFieldName = '';
    if (fieldName.includes('dateOfBirth')) {
      thisFieldName = 'dateOfBirth';
    } else if (fieldName.includes('documentExpiryDate')) {
      thisFieldName = 'documentExpiryDate';
    } else {
      thisFieldName = fieldName;
    }
    // Delete the error
    const key = thisFieldName;
    delete tempArr[key];
    setErrors(tempArr);
  };

  // Update form info to state
  const handleChange = (e) => {
    // Original data
    setPersonData({ ...personData, [e.target.name]: e.target.value });
    // Updated data
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear any errors
    removeError(e.target.name);
  };

  const handleErrors = (e) => {
    // Error onBlur if condition not met
    switch (e.target.name) {
      case 'documentExpiryDateYear':
        (/^[0-9]+$/i.test(formData.documentExpiryDateYear))
          ? removeError('documentExpiryDateYear')
          : setErrors({ ...errors, documentExpiryDate: 'Enter a valid date' });
        break;
      case 'documentExpiryDateMonth':
        (/^([0-1]\d|[1-9]\d{2,})$/i.test(formData.documentExpiryDateMonth))
          ? removeError('documentExpiryDate')
          : setErrors({ ...errors, documentExpiryDate: 'Enter a valid date' });
        break;
      case 'documentExpiryDateDay':
        (/^(0?[1-9]|[12][0-9]|3[01])$/i.test(formData.documentExpiryDateDay))
          ? removeError('documentExpiryDate')
          : setErrors({ ...errors, documentExpiryDate: 'Enter a valid date' });
        break;
      case 'dateOfBirthYear':
        (/^[0-9]+$/i.test(formData.dateOfBirthYear))
          ? removeError('dateOfBirthYear')
          : setErrors({ ...errors, dateOfBirth: 'Enter a valid date' });
        break;
      case 'dateOfBirthMonth':
        (/^[0-9]+$/i.test(formData.dateOfBirthMonth))
          ? removeError('dateOfBirth')
          : setErrors({ ...errors, dateOfBirth: 'Enter a valid date' });
        break;
      case 'dateOfBirthDay':
        (/^[0-9]+$/i.test(formData.dateOfBirthDay))
          ? removeError('dateOfBirth')
          : setErrors({ ...errors, dateOfBirth: 'Enter a valid date' });
        break;
      default: '';
    }
  };

  // Handle missing required fields
  const checkRequiredFields = (data) => {
    const fieldsErroring = {};
    personValidationRules.map((rule) => {
      (!(rule.inputField in data) || data[rule.inputField] === '')
        ? fieldsErroring[rule.errorDisplayId] = rule.message
        : null;
    });
    setErrors(fieldsErroring);
    return Object.keys(fieldsErroring).length > 0;
  };

  // Reformat dates for api & remove field level keys
  const reformatDate = (data) => {
    const fieldLevelDates = ['documentExpiryDateYear', 'documentExpiryDateMonth', 'documentExpiryDateDay', 'dateOfBirthYear', 'dateOfBirthMonth', 'dateOfBirthDay'];
    const cleanedData = { ...data };

    Object.keys(cleanedData).map((itemKey) => {
      return fieldLevelDates.indexOf(itemKey) >= 0 ? delete cleanedData[itemKey] : null;
    });

    const dataToSubmit = ({
      ...cleanedData,
      documentExpiryDate: formatDate(personData.documentExpiryDateYear, personData.documentExpiryDateMonth, personData.documentExpiryDateDay),
      dateOfBirth: formatDate(personData.dateOfBirthYear, personData.dateOfBirthMonth, personData.dateOfBirthDay),
    });

    return dataToSubmit;
  };

  // Handle Submit, including clearing localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    // If date fields exist, format them
    const dataToSubmit = reformatDate(formData);

    if (
      !checkRequiredFields(personData) // No empty required fields
    ) {
      axios.patch(`${PEOPLE_URL}/${personId}`, dataToSubmit, {
        headers: { Authorization: `Bearer ${Auth.retrieveToken()}` },
      })
        .then(() => {
          clearLocalStorage();
          history.push(PEOPLE_PAGE_URL);
        })
        .catch((err) => {
          if (err.response) {
            switch (err.response.status) {
              case 400: console.log(err.response.status); break;
              case 401: history.push('/sign-in?source=people'); break;
              case 422: history.push('/sign-in?source=people'); break;
              case 405: history.push('/sign-in?source=people'); break;
              default: console.log(err.response.status); break;
            }
          }
        });
    }
  };

  // Get person data to pass to prepopulate the form
  useEffect(() => {
    getPersonData();
  }, []);

  // Update localStorage if personData or errors changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(personData));
  }, [personData]);
  useEffect(() => {
    localStorage.setItem('errors', JSON.stringify(errors));
    window.scrollTo(0, 0);
  }, [errors]);

  return (
    <div className="govuk-width-container ">
      <div className="govuk-breadcrumbs">
        <ol className="govuk-breadcrumbs__list">
          <li className="govuk-breadcrumbs__list-item">
            <a className="govuk-breadcrumbs__link" href="/people">People</a>
          </li>
          <li className="govuk-breadcrumbs__list-item" aria-current="page">Edit person</li>
        </ol>
      </div>
      <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing" role="main">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">Save a person</h1>
            <p className="govuk-body-l">Update the details of the person you want to edit.</p>
            <form id="EditPerson">

              <CreatePerson
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleErrors={handleErrors}
                data={personData}
                errors={errors}
              />

              <p>
                <a href="/people" className="govuk-link govuk-link--no-visited-state" onClick={(e) => clearLocalStorage(e)}>Exit without saving</a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withRouter(EditPerson);
