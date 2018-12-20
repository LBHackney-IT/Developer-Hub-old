---
layout: api
title: Repairs API
permalink: /apis/repairs_API.md/
compliant: true
compliant_message: 'Compliant: 12/12'
staging_available: true
staging_url: https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/index.html
staging_swagger_url: https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/staging/repairs/swagger/index.html
production_available: true
production_url: https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/repairs/swagger/index.html
production_swagger_url: https://g6bw0g0ojk.execute-api.eu-west-2.amazonaws.com/production/repairs/swagger/index.html
summary: more details on api.
github_url: https://github.com/LBHackney-IT/Hackney_Repairs_API
---

## Overview
{: .govuk-heading-l}

The Repairs API provides up to date data on repairs-related information with the Hackney Council. This API retrieves data from Universal Housing database and DRS mirrored database.
More specifically, this API can:
- Retrieve data about properties in Hackney. Properties can be retrieved via the property reference. There are a number of specific endpoints that allow to retrieve specific data about the property and its relationship with other properties, for example retrieving all properties contained withing a block, retrieving the hierarchy of a property or retrieving the block or estate the property belongs to.
- Retrieve data about work orders. Work order data can retrieved via the work order reference or via the property reference the work order was rasised against.
- Get and create repair requests. Repair request data can be retrieved via the repair reques reference or the property reference. The API also allows to create a repair request to Universal Housing.
- Get and create appointments. Appointments for work orders can be retrieved in two ways, all past and present appointments and latest appointment. The API allows to retrieve a list of available timeslots for booking an appointment for a work order and to create and appointment using one of the timeslots.
- Get and add notes. Notes can be retrieved and added to Universal Housing, currently only work order notes are supported.
{: .govuk-body}

## Service Area
{: .govuk-heading-l}

Housing Repairs- Track a repair,Report a Repair
{: .govuk-body}

## Compliancy
{: .govuk-heading-l}

The Example API is **compliant** with the Hackney API Standards.
{: .govuk-body}
