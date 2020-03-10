import React from 'react';

const FormVoyageArrival = ({ handleSubmit, handleChange, data }) => {
  return (
    <section>
      <h1 className="govuk-heading-xl">Arrival details</h1>
      <p className="govuk-body-l">Provide the arrival details of the voyage</p>

      <div id="arrivalDate" className="govuk-form-group">
        <fieldset className="govuk-fieldset" role="group" aria-describedby="arrivalDate-hint">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
            <label className="govuk-label govuk-label--m" htmlFor="arrivalDate">
              Arrival date
            </label>
          </legend>
          <span className="govuk-hint">
            For example, 20 2 2020
          </span>
          <div className="govuk-date-input" >
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="arrivalDateDay">
                  Day
                </label>
                <input
                  className="govuk-input govuk-date-input__input govuk-input--width-2"
                  name="arrivalDateDay"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="2"
                  value={data.arrivalDateDay || ''}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="arrivalDateMonth">
                  Month
                </label>
                <input
                  className="govuk-input govuk-date-input__input govuk-input--width-2"
                  name="arrivalDateMonth"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="2"
                  value={data.arrivalDateMonth || ''}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="arrivalDateYear">
                  Year
                </label>
                <input
                  className="govuk-input govuk-date-input__input govuk-input--width-4"
                  name="arrivalDateYear"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="4"
                  value={data.arrivalDateYear || ''}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div id="arrivalTime" className="govuk-form-group">
        <fieldset className="govuk-fieldset" role="group" aria-describedby="arrivalTime-hint">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
            <label className="govuk-label govuk-label--m" htmlFor="arrivalTime">
              Arrival time
            </label>
          </legend>
          <span className="govuk-hint">
            For example, 17 30
          </span>
          <div className="govuk-date-input" >
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="arrivalTimeHour">
                  Hour
                </label>
                <input
                  className="govuk-input govuk-date-input__input govuk-input--width-2"
                  name="arrivalTimeHour"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="2"
                  value={data.arrivalTimeHour || ''}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor="arrivalTimeMinute">
                  Minute
                </label>
                <input
                  className="govuk-input govuk-date-input__input govuk-input--width-2"
                  name="arrivalTimeMinute"
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="2"
                  value={data.arrivalTimeMinute || ''}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div id="arrivalPort" className="govuk-form-group">
        <label className="govuk-label govuk-label--m" htmlFor="arrivalPort">
          Arrival port
        </label>
          <span className="govuk-hint">
            The name or UNLOCODE of the port, for example Monaco or MC MON. Enter ‘ZZZZ’ if not known
          </span>
        <input
          className="govuk-input"
          name="arrivalPort"
          type="text"
          value={data.arrivalPort || ''}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div id="arrivalCoordinates" className="govuk-form-group">
        <fieldset className="govuk-fieldset" role="group" aria-describedby="arrivalCoordinates-hint">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
            <label className="govuk-label govuk-label--m" htmlFor="arrivalCoordinates">
              Arrival coordinates
            </label>
            <span className="govuk-hint">
              If port is ‘ZZZZ’, provide decimal coordinates to 6 places
            </span>
          </legend>
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" htmlFor="arrivalCoordinatesLat">
              Latitude
            </label>
            <span className="govuk-hint">
              For example 51.507493
            </span>
            <input
              className="govuk-input govuk-date-input__input"
              name="arrivalCoordinatesLat"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              value={data.arrivalCoordinatesLat || ''}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="govuk-form-group">
            <label className="govuk-label govuk-date-input__label" htmlFor="arrivalCoordinatesLong">
              Longitude
            </label>
            <span className="govuk-hint">
              For example 51.507493
            </span>
            <input
              className="govuk-input govuk-date-input__input"
              name="arrivalCoordinatesLong"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              value={data.arrivalCoordinatesLong || ''}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </fieldset>
      </div>

      <button
        className="govuk-button"
        data-module="govuk-button"
        onClick={(e) => handleSubmit(e)}
      >
        Save and continue
      </button>
    </section>
  );
};

export default FormVoyageArrival;