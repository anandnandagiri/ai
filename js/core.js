function generateLinks(data, divtag) {
    var headersContainer = $('#' + divtag);
    data.headers.forEach(function (header) {
        var headerDiv = $('<div class="mb-5"></div>');

        var linkGroup = $('<div class="mb-1"></div>');
        header.links.forEach(function (link) {
            var anchor = $('<a href="' + link.url + '" class="btn btn-primary" target="_blank">' + link.label + '</a>');
            linkGroup.append(anchor);
        });

        var openAllButton = $('<button type="button" class="btn btnsmall btn-success">Open All</button>');
        openAllButton.click(function () {
            var originalWindow = window;
            linkGroup.find('a').each(function () {
                $(this)[0].click()
            });
            originalWindow.focus();
        });

        var headerTitle = $('<div class="ml-3 mb-1" style="display:block"><h5>' + header.title + '</h5></div>');
        headerTitle.append(openAllButton);
        headerDiv.append(headerTitle);
        headerDiv.append(linkGroup);

        headersContainer.append(headerDiv);
    });
}

function generateTable(data, tabletag) {
    var rows = "";
    data.forEach(function (item) {
        rows += "<tr><td class='bg-success text-white'>" + item.td1 + "</td><td>" + item.td2 + "</td></tr>";
    });
    $("#" + tabletag).html(rows);
}