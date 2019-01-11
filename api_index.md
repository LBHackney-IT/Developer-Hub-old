---
layout: default
title: Available APIs
permalink: /api_index.md/
---

<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-l">Live APIs</h2>
    <br>
    <h3 class="govuk-heading-m">
      <a href="/assets/images/apirelations.png"  target="_blank">API Relations Diagram</a>
    </h3>
    <p class="govuk-body">A visual representation of the existing relations between products, APIs and databases.</p>
  </div>
</div>



<div class="govuk-grid-row">
  <div class="govuk-grid-column-full">
    {% for api in site.apis %}
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
          <h3 class="govuk-heading-m">
            <a href="{{ api.url }}">{{ api.title }}</a>
          </h3>
          <p class="govuk-body">{{ api.summary }}</p>
        </div>
        <div class="govuk-grid-column-one-third align-right">
          <strong class="govuk-tag govuk-tag--{% if api.compliant %}positive{% else %}negative{% endif %}">{{ api.compliant_message }}</strong>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
