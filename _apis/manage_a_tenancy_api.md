---
layout: api
title: Manage a Tenancy API
permalink: /apis/manage_a_tenancy_api.md/
compliant: false
compliant_message: 'Non Compliant: 5/12'
staging_available: true
staging_url: https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html
staging_swagger_url: https://sandboxapi.hackney.gov.uk/manageatenancy/swagger/index.html
production_available: true
production_url: https://api.hackney.gov.uk/manageatenancy/swagger/index.html
production_swagger_url: https://api.hackney.gov.uk/manageatenancy/swagger/index.html
summary: The Manage a Tenancy API allows estate officers and managers to search for and retrieve residents’ contact and account details.
github_url: https://github.com/LBHackney-IT/Manage_a_tenancy_API
---

## Overview
{: .govuk-heading-l}

The Manage a Tenancy API allows estate officers and managers to search for and retrieve residents’ contact and account details. It allows officers and managers to create new citizens, update information and raise cautionary alerts. Additionally, managers are able to create and update officer and patch information.
{: .govuk-body}

Detailed list of Manage a Tenancy API endpoints:
{: .govuk-body}

-	Get account information for housing residents: Retrieves account and contact details based on a tag or payment reference. The account represents the tenancy agreement for a property and contacts details for residents of that property.
- Get account information by contact ID: Retrieves account information based on a contact id
-	Get all estate officers for an area: Returns all officers assigned to a patch in an area. It does not show officers who are currently unassigned to a patch (e.g. on long leave).
-	Get area patch: Returns an officer patch information based on a postcode and UPRN.
-	Update officer patch or area manager: Allows managers to remove officers or area managers from a patch and re-assign the patch to a new person.
-	Get all unassigned officers: Return all officers that are not currently assigned to a patch or area allowing a manager to easily choose who to assign to a patch.
-	Get citizen index search results: In basic search allows searching for contact information by surname or the first line of an address; in advanced mode it also allows searching by first name or postcode.
-	Add a new citizen: Creates a record of a new citizen as a new CRM contact.
-	Get cautionary alerts: Returns a list of cautionary alerts for a given property. Cautionary alerts are also saved against contact.
-	Create cautionary alerts: create one or more new cautionary alert for a contact.
-	Remove cautionary alerts: removes one or more cautionary alert against a contact. It also checks if anyone else in the property has any cautionary alerts, if they do not the property cautionary alert flag is removed.
-	Get contact details by ID: retrieves contact details by a given contact ID.
-	Get contacts by UPRN: Returns a list of transactions based on the UPRN provided.
-	Login: Authenticates users based on username and password
-	Get tenancy management interactions: returns interactions available to officers, managers or contact.
-	Get tenancy management interactions by area: returns a list of all tenancy management interactions based on a selected area.
-	Create tenancy management interaction: creates a new tenancy interaction.
-	Update tenancy management interaction: used to update or close an existing interaction.
-	Transfer tenancy management interactions: Allows a tenancy interaction to be transferred to another officer.
-	Create officer account: creates a new officer account.
-	Get housing transactions: Returns a list of housing interactions from the last year.
{: .govuk-body}

## Service Area
{: .govuk-heading-l}

Housing : Manage a Tenancy
{: .govuk-body}

## Compliancy
{: .govuk-heading-l}

The Example Non Compliant API is **not compliant** with the Hackney API Standards.
{: .govuk-body}
