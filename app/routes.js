//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//
const { timelineData }  = require("./views/eventlog/v1/data");
const { en } = require("./views/eventlog/v1/lang");
const { lang } = require("./views/referral/v1/create/lang");

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Find an address plugin
const findAddressPlugin = require("find-an-address-plugin");

findAddressPlugin(router);

 const todaysDate = new Date();

// Logging session data
// This code shows in the terminal what session data has been saved.
router.use((req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    data: req.session.data,
  };
  console.log(JSON.stringify(log, null, 2));
  res.locals.en = en;
  res.locals.lang = lang;
  res.locals.todaysDate = {
       day: todaysDate.getDate(),
       month: todaysDate.getMonth() + 1,
       year: todaysDate.getFullYear(),
     },
  next();
});

// This code shows in the terminal what page you are on and what the previous page was.
router.use("/", (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get("Referrer"); // previous screen

  console.log(
    "folder : " + res.locals.folder + ", subfolder : " + res.locals.subfolder,
  );

  next();
});

// Routing for the example journey.
router.post("/country-answer", function (req, res) {
  var country = req.session.data["country"];
  if (country == "England") {
    res.redirect("example/complete");
  } else {
    res.redirect("example/ineligible");
  }
});

// Add your routes here
//v1

router.use("/eventlog/v1/timeline", (req, res, next) => {
  const pinned = req.query.pin;
  const unpinned = req.query.unpin;

  if(pinned){
    timelineData.find(x => x.event_id === Number(pinned)).pinned = true;
  }

  if(unpinned){
    timelineData.find(x => x.event_id === Number(unpinned)).pinned = false;
  }

  const pinnedItems = timelineData.filter(x => x.pinned === true)

  res.locals.keyDetailsBar = true;
  res.locals.timeline = timelineData;
  res.locals.pinnedItems = pinnedItems;
  res.locals.entry = req.query.entry
  next();
});

router.post("/eventlog/v1/reason", function (req, res) {
  var whatAreYouAdding = req.session.data["whatAreYouAdding"];
  if (whatAreYouAdding == "INBOUND") {
    res.redirect("/eventlog/v1/inbound");
  } else if (whatAreYouAdding == "OUTBOUND") {
    res.redirect("/eventlog/v1/outbound");
  } else {
    res.redirect("/eventlog/v1/what-updated");
  }
});

router.post("/eventlog/v1/inbound", function (req, res) {
  res.redirect("/eventlog/v1/check-answers");
});

router.post("/eventlog/v1/outbound", function (req, res) {
  res.redirect("/eventlog/v1/check-answers");
})

router.post("/eventlog/v1/what-updated", function (req, res) {
  res.redirect("/eventlog/v1/check-answers");
});

router.post("/eventlog/v1/check-answers", function (req, res) {

  const date = `${req.session.data["whatAreYouAddingDate-year"]}-${req.session.data["whatAreYouAddingDate-month"]}-${req.session.data["whatAreYouAddingDate-day"]}`

  timelineData.unshift({
     benefit_type: 'ESA',
     source_system: 'HAS',
     identifiers: [
       { id_type: 'referral_id', id_value: 'pip-123123' },
       {
         id_type: 'citizen_guid',
         id_value: '88776655-1234-4321-9876-665544332211'
       }
     ],
     created_timestamp: '2022-02-22T17:30:00.000Z',
     created_by: {
       first_name: 'Jane',
       last_name: 'Doe',
       email: 'jane.doe@dwp.gov.uk'
     },
     event_id: timelineData.length,
     action: {
       channel: [
         { code: 'PHONE', text: 'Telephone call' }
      ],
       contact_type: { code: req.session.data["whatAreYouAdding"], text: en.whatAreYouAdding[req.session.data["whatAreYouAdding"]] },
       action_type: { code: '', text: 'Paper based review booked' },
       action_date: date,
       action_time_freetext: req.session.data["whatAreYouAddingTime"],
       action_user: {
         first_name: 'Angela',
         last_name: 'Tait',
         email: 'jane.tait@dwp.gov.uk'
       },
       action_description: 'A new entry here',
       action_contact: { code: req.session.data["whoContacted"], text: en.whoContacted[req.session.data["whoContacted"]] }
     },
     pinned: false
   })

  res.locals.timeline = timelineData;
  res.redirect("/eventlog/v1/timeline?entry=true");
});

//create a referral

router.post("/referral/v1/create/claimant-details", function (req, res) {
  res.redirect("/referral/v1/create/contact-details");
});

router.post("/referral/v1/create/contact-details", function (req, res) {
  res.redirect("/referral/v1/create/benefit-type");
});

router.post("/referral/v1/create/benefit-type", function (req, res) {
  res.redirect("/referral/v1/create/referral-type");
});

router.post("/referral/v1/create/referral-type", function (req, res) {
  res.redirect("/referral/v1/create/additional-details");
});

router.post("/referral/v1/create/additional-details", function (req, res) {
  res.redirect("/referral/v1/create/check-answers");
});

router.post("/referral/v1/create/confirmation", function (req, res) {
  req.session.data = {}
  res.redirect("/referral/v1/create/confirmation");
});


//update
router.use("/referral/v1/update/update-referral-details", (req, res, next) => {
  res.locals.keyDetailsBar = true;
  next();
});

router.use("/referral/v1/update/update-claimant-details", (req, res, next) => {
  res.locals.keyDetailsBar = true;
  next();
});

router.post("/referral/v1/update/claimant-details", function (req, res) {
  res.redirect("/referral/v1/update/update-claimant-details");
});
