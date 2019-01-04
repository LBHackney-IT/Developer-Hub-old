---
layout: api
title: Tenancy Management Process API
permalink: /apis/tmprocess_api/
compliant: false
compliant_message: 'Compliant: 0/12'
staging_available: true
staging_url: https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/
staging_swagger_url: https://sandboxapi.hackney.gov.uk/tmprocessapi/swagger/
production_available: true
production_url: https://api.hackney.gov.uk/tmprocess/swagger/
production_swagger_url: https://example.com/swagger/v1/swagger.json
summary: The Tenancy Management Process API provides the logic and act as an engine built specifically for the Manage a Tenancy process.
github_url: https://github.com/LBHackney-IT/ManageATenancyProcessWebApp/
---

## Overview
{: .govuk-heading-l}

The Tenancy Management Process API's endpoints are mainly concerned with providing logic for Tenancy Management processes (e.g. Home check, Tenancy and household check) and act as an engine built specifically for the Manage a tenancy process.
The processes above use a single component to render multiple pages. To achieve that, an Angular component is used and the layout, keys and actual data are all saved in a database.
The API endpoints provide functionality to the UI to retrieve layout based on a page ID.
{: .govuk-body}

The API:
{: .govuk-body}

- Retrieves the layout and schema for a page based on a page ID. It uses custom logic to perform JSON mapping of the elements to achieve key/value structure and to comply with required structure of the Angular component.
- Retrieves response data and status data for a given process. Response data is an answer that an officer records for a given question that is part of the process. Status data is the status of different sections (complete / incomplete) for a given process.
- Post data back to the database by ensuring it is saved in a key-value format. Posting data also deals with the creation of physical files (e.g. images) that are saved onto the server.
- Gets data for final review page of a process by merging all data saved and grouping it based on contact ID.
- Deals with creating / updating a record of each new process created at the point of initiation. To achieve that, a database table holds information regarding CRM GUID of the interaction created, timestamp,
json data.
- Saves to the database and creates a physical file to the server - PDF.
- Prepares and sends an email.
{: .govuk-body}

## Service Area
{: .govuk-heading-l}

Housing - Housing Management
{: .govuk-body}

## Compliancy
{: .govuk-heading-l}

The tenancy management process API is not **compliant** with the Hackney API Standards.
{: .govuk-body}
