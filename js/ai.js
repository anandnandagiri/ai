
var headerData = {
    "headers": [
        {
            "title": "AI GitHub",
            "links": [
                //{ "label": "", "url": "" },
                { "label": "langchain", "url": "https://github.com/langchain-ai/langchain/tree/master" },
                { "label": "ollama", "url": "https://github.com/jmorganca/ollama" },
                { "label": "GPT4ALL", "url": "https://github.com/nomic-ai/gpt4all" },
                { "label": "ONNX Runtime", "url": "https://github.com/microsoft/onnxruntime" },
            ]
        },
        {
            "title": "AI Tools DB",
            "links": [
                { "label": "Future Tools", "url": "https://www.futuretools.io/" },
                { "label": "An AI", "url": "https://theresanaiforthat.com/" },
                { "label": "Humans", "url": "https://www.toolsforhumans.ai/" },
                { "label": "FYI", "url": "https://aitools.fyi/" },
                { "label": "Futurepedia", "url": "https://www.futurepedia.io/" },
            ]
        },
        {
            "title": "AI in Cloud",
            "links": [
                { "label": "Google Vertex AI", "url": "https://console.cloud.google.com/vertex-ai" },                
                { "label": "Azure AI Services", "url": "https://portal.azure.com" },
                { "label": "AWS SageMaker", "url": "https://console.aws.amazon.com/sagemaker?p=pm&c=sm&z=1" },
                { "label": "Open AI", "url": "https://platform.openai.com/login?launch" },
            ]
        },

        {
            "title": "AI Tools",
            "links": [
                { "label": "Coral Google TPU", "url": "https://coral.ai/products/" },
                { "label": "Cuebric", "url": "https://cuebric.com/" },
                { "label": "Lensa - Prisma Labs", "url": "https://prisma-ai.com/lensa" },
                { "label": "Avatar Maker", "url": "https://avatarmaker.com/" },
                { "label": "Youtube Summary", "url": "https://vidrapid.com/" },
            ]
        },
        {
            "title": "AI Image/Video Tools",
            "links": [
                { "label": "Adobe Firefly", "url": "https://firefly.adobe.com/upload/inpaint#" },
                { "label": "Canvas", "url": "https://www.canva.com" },
                { "label": "Increase Resolution", "url": "https://replicate.com/mv-lab/swin2sr" },
                { "label": "Cutout.Pro", "url": "https://www.cutout.pro/" },
                { "label": "flairAI display product", "url": "https://flair.ai/" },
                { "label": "remini ai", "url": "https://remini.ai/" },
            ]
        },
        {
            "title": "AI WebSite Builder Tools",
            "links": [
                { "label": "CodeDesign.ai", "url": "https://codedesign.ai/" },
                { "label": "0Web", "url": "https://10web.io/" },
            ]
        },        


    ]
};

var sliderData = {
    "headers": [
        {
            "title": "AI Platforms",
            "links": [
                { "label": "huggingface", "url": "https://huggingface.co/" },
                { "label": "kaggle", "url": "https://www.kaggle.com/" },
                { "label": "Google Colab", "url": "https://colab.research.google.com/" },
                //{ "label": "", "url": "" },
            ]
        },
        {
            "title": "AI Framework",
            "links": [
                { "label": "langchain", "url": "https://www.langchain.com/" },
                //{ "label": "", "url": "" },						
            ]
        },
        {
            "title": "AI Low/No Code",
            "links": [
                { "label": "Flowise", "url": "https://flowiseai.com/" },
                { "label": "LangFlow", "url": "https://www.langflow.org/" },
            ]
        },

        {
            "title": "AI Engine",
            "links": [
                { "label": "ONNX Runtime", "url": "https://onnxruntime.ai/" },
                //{ "label": "", "url": "" },						
            ]
        },

        {
            "title": "LLM Tools",
            "links": [
                { "label": "ollma", "url": "https://ollama.ai/" },
                { "label": "GPT4ALL", "url": "https://gpt4all.io/index.html" },
                { "label": "LM Studio", "url": "https://lmstudio.ai/" },
                { "label": "Mistral vLLM", "url": "https://docs.mistral.ai/self-deployment/overview" },
            ]
        },
        {
            "title": "AI Code Tools",
            "links": [
                { "label": "zzzCode", "url": "https://zzzcode.ai" },
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
