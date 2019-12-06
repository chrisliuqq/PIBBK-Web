function appendReleaseNote(response) {
    if (!('data' in response)) {
        return;
    }

    var parent = document.querySelector('#release-notes');
    parent.innerHTML = '';

    response.data.forEach((element) => {
        let entry = document.createElement('div');
        let releaseDate = new Date(element.published_at).toLocaleString('zh-TW', {hour12: false});
        entry.innerHTML = `
<div class="TimelineItem">
  <div class="TimelineItem-badge bg-purple text-white">
    <span>${element.tag_name}</span>
  </div>
  <div class="TimelineItem-body">
    <h3 class="h3">${releaseDate}</h3>
    ${element.name} - ${element.body}
  </div>
</div>`;
        parent.appendChild(entry);
    });
}

var script = document.createElement('script');
script.src = 'https://api.github.com/repos/chrisliuqq/PIBBK-Lite/releases?callback=appendReleaseNote';

document.getElementsByTagName('head')[0].appendChild(script);