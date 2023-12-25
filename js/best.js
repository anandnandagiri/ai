
var headerData = {
    "headers": [
        {
            "title": "LLAMA Models",
            "links": [
                { "label": "orca 2 7B", "url": "https://huggingface.co/microsoft/Orca-2-7b" },
                { "label": "MISTRAL 7B", "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1" },                
                //{ "label": "", "url": "" },
            ]
        },
        {
            "title": "Blogs",
            "links": [
                { "label": "orca 2 7B", "url": "https://huggingface.co/microsoft/Orca-2-7b" },
                { "label": "MISTRAL 7B", "url": "https://huggingface.co/mistralai/Mistral-7B-v0.1" },
                //{ "label": "", "url": "" },
            ]
        },
        {
            "title": "Youtube Links",
            "links": [
                { "label": "Google Colab - Beginners", "url": "https://www.youtube.com/watch?v=RLYoEyIHL6A" },
                { "label": "RAG Demo with Ollama", "url": "https://www.youtube.com/watch?v=-1sdWLr3TbI&list=PLEEpsxxj8C3KNFNfbqeJcAxBJrwwUXOVQ&index=1" },
                { "label": "Nvidia CUDA", "url": "https://www.youtube.com/watch?v=r9IqwpMR9TE" },
                { "label": "No GPU - Replit(Huggingface)", "url": "https://www.youtube.com/watch?v=iqClxAtPOYs" },
                { "label": "seaborn", "url": "https://www.youtube.com/watch?v=ooqXQ37XHMM" },
            ]
        },
    ]
};

function generateLinks(data, divtag) {
    var headersContainer = $('#' + divtag);
    data.headers.forEach(function (header) {
        var headerDiv = $('<div class="mt-5"></div>');

        var linkGroup = $('<div class="mt-1"></div>');
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

        var headerTitle = $('<div class="ml-3" style="display:block"><h5>' + header.title + '</h5></div>');
        headerTitle.append(openAllButton);
        headerDiv.append(headerTitle);
        headerDiv.append(linkGroup);

        headersContainer.append(headerDiv);
    });
}
