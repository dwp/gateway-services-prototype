//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const { formatDateString, formatDate } = require("nunjucks-formatters/formatters/date");

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('formatDate', function (content) {
  return formatDate(content)
})

addFilter('formatDateString', function (content) {
  return formatDateString(content)
})
