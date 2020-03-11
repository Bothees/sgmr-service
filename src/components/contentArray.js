const contentArray = [
  {
    urlStub: '/reports',
    pageHeading: 'Submit an Advanced Voyage Report',
    pageBlurb: 'You can use the online form to create and submit an Advanced Voyage Report to UK Border Force.',
    formIntroHeading: null,
    formIntroBlurb: null,
    buttonText: 'Start now',
    buttonLink: 'save-voyage/page-1',
    buttonClass: 'govuk-button--start',
    reportType: 'tabs',
  },
  {
    urlStub: '/vessels',
    pageHeading: 'Vessels',
    pageBlurb: 'You can view, edit or delete vessels that you regularly add to Advanced Voyage Reports.',
    formIntroHeading: 'Save a new vessel',
    formIntroBlurb: 'Save the details of vessels that you regularly submit Advanced Voyage Reports for.',
    buttonText: 'Save a vessel',
    buttonLink: 'vessels/save-vessel',
    buttonClass: 'govuk-button--start',
    reportType: 'tables',
    reportTitles: ['Vessel name', 'Vessel type', 'Usual moorings'],
  },
  {
    urlStub: '/people',
    pageHeading: 'People',
    pageBlurb: 'You can view, edit or delete people that you regularly sail with so that you can easily add them to Advanced Voyage Reports.',
    formIntroHeading: 'Save a new person',
    formIntroBlurb: 'Save the details of people that you regularly sail with.',
    buttonText: 'Save a person',
    buttonLink: 'people/save-person',
    buttonClass: 'govuk-button--start',
    reportType: 'tables',
    reportTitles: ['Surname', 'Given name', 'Type'],
  },
  {
    urlStub: '/account',
    pageHeading: 'Account',
    pageBlurb: 'Manage your account details',
    buttonText: 'Edit details',
    buttonLink: '/account/edit',
  },
];

export default contentArray;
