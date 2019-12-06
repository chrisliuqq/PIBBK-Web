var trackDownloadLink = function(os) {
  gtag('event', 'click', {
    'event_category': 'click',
    'event_label': os,
    'transport_type': 'beacon',
    'value': 'download'
  });
}