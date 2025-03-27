const timelineData = [
   {
     benefit_type: 'UC',
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
     event_id: 0,
     action: {
       channel: [ { code: 'PHONE', text: 'Telephone call' } ],
       contact_type: { code: 'OUTBOUND', text: 'Outbound contact' },
       action_type: { code: '', text: 'Paper based review booked' },
       action_date: '2022-02-25',
       action_time_freetext: '1:30pm',
       action_user: {
         first_name: 'Angela',
         last_name: 'Tait',
         email: 'jane.tait@dwp.gov.uk'
       },
       action_description: 'PBR booked 21/03/2022 2pm, AS needs noted',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'PIP',
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
       first_name: 'Angela',
       last_name: 'Tait',
       email: 'jane.tait@dwp.gov.uk'
     },
     event_id: 1,
     action: {
       channel: [ { code: 'POST', text: 'Letter sent' } ],
       contact_type: { code: 'INBOUND', text: 'Inbound contact' },
       action_type: { code: '', text: 'Returned questionnaire' },
       action_date: '2022-02-23',
       action_time_freetext: '',
       action_user: {
         first_name: 'Angela',
         last_name: 'Tait',
         email: 'jane.tait@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'UC',
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
       first_name: 'Angela',
       last_name: 'Tait',
       email: 'jane.tait@dwp.gov.uk'
     },
     event_id: 2,
     action: {
       channel: [ { code: 'PHONE', text: 'Telephone call' } ],
       contact_type: { code: 'INBOUND', text: 'Inbound contact' },
       action_type: { code: '', text: 'Progress chasing' },
       action_date: '2022-02-21',
       action_time_freetext: '10am',
       action_user: {
         first_name: 'Angela',
         last_name: 'Tait',
         email: 'jane.tait@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'PIP',
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
     event_id: 3,
     action: {
       channel: [ { code: 'POST', text: 'Letter sent' } ],
       contact_type: { code: 'OUTBOUND', text: 'Outbount contact' },
       action_type: { code: '', text: 'Reminded them to return questionnaire' },
       action_date: '2022-02-20',
       action_time_freetext: '10am',
       action_user: {
         first_name: 'Phil',
         last_name: 'Smith',
         email: 'phil.smith@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'PIP',
     source_system: 'HAS',
     identifiers: [
       { id_type: 'referral_id', id_value: 'pip-123123' },
       {
         id_type: 'citizen_guid',
         id_value: '88776655-1234-4321-9876-665544332211'
       },
       { id_type: 'identity_verified', id_value: 'YES' }
     ],
     created_timestamp: '2022-02-22T17:30:00.000Z',
     created_by: {
       first_name: 'Jane',
       last_name: 'Doe',
       email: 'jane.doe@dwp.gov.uk'
     },
     event_id: 4,
     action: {
       channel: [ { code: 'PHONE', text: 'Telephone call' } ],
       contact_type: { code: 'OUTBOUND', text: 'Outbount contact' },
       action_type: { code: '', text: 'Sent questionnaire' },
       action_date: '2022-02-6',
       action_time_freetext: '',
       action_user: {
         first_name: 'Phil',
         last_name: 'Smith',
         email: 'phil.smith@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'PIPSERVICE',
     source_system: 'HAS',
     identifiers: [
       { id_type: 'referral_id', id_value: 'pip-123123' },
       {
         id_type: 'citizen_guid',
         id_value: '88776655-1234-4321-9876-665544332211'
       },
       { id_type: 'identity_verified', id_value: 'NO' }
     ],
     created_timestamp: '2022-02-22T17:30:00.000Z',
     created_by: {
       first_name: 'Jane',
       last_name: 'Doe',
       email: 'jane.doe@dwp.gov.uk'
     },
     event_id: 5,
     action: {
       channel: [
         { code: 'POST', text: 'Letter sent' },
         { code: 'EMAIL', text: 'Email' }
       ],
       contact_type: { code: 'OUTBOUND', text: 'Outbount contact' },
       action_type: { code: '', text: 'Sent questionnaire' },
       action_date: '2022-02-6',
       action_time_freetext: '',
       action_user: {
         first_name: 'Phil',
         last_name: 'Smith',
         email: 'phil.smith@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   },
   {
     benefit_type: 'PIP',
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
     event_id: 6,
     action: {
       channel: [
         { code: 'POST', text: 'Letter sent' },
         { code: 'EMAIL', text: 'Email' },
         { code: 'PHONE', text: 'Telephone call' }
       ],
       contact_type: { code: 'OUTBOUND', text: 'Outbount contact' },
       action_type: { code: '', text: 'Sent questionnaire' },
       action_date: '2024-10-08',
       action_time_freetext: '',
       action_user: {
         first_name: 'Phil',
         last_name: 'Smith',
         email: 'phil.smith@dwp.gov.uk'
       },
       action_description: '',
       action_contact: { code: 'CLAIMANT', text: 'The claimant' }
     },
     pinned: false
   }
 ];

 module.exports = {
  timelineData
};
