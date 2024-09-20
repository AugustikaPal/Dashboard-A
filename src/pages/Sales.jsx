import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Sales = () => {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',
        id: "036da609-b813-4823-95db-e538ee41436d", // Your actual report ID
        embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzY4NDExMjktZjkxNS00MWMyLTlmMjYtY2M0NzA2NWY1NjExIiwidCI6ImE0NmQyMzZmLTVjNWEtNDE2NC04MzJmLTIyMmRhODFmMWI4MSJ9", // Your embed URL
        accessToken: 'YOUR_ACCESS_TOKEN', // Your valid access token
        tokenType: models.TokenType.Embed,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false,
            },
          },
          background: models.BackgroundType.Transparent,
        },
      }}
      eventHandlers={new Map([
        ['loaded', function () { console.log('Report loaded'); }],
        ['rendered', function () { console.log('Report rendered'); }],
        ['error', function (event) { console.log(event.detail); }],
        ['visualClicked', () => console.log('Visual clicked')],
        ['pageChanged', (event) => console.log(event)],
      ])}
      cssClassName={"reportClass"}
      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport;
      }}
    />
  );
};

export default Sales;