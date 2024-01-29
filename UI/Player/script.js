let params = new URLSearchParams(window.location.search);
let id = params.get("id");

function addVideo(videoPath){
    let video = document.createElement("source");
    video.setAttribute("src","data/videos/"+ videoPath);
    video.setAttribute("id","video");
    document.getElementsByClassName("Video")[0].appendChild(video)
}

let suggestions = document.getElementsByClassName("suggestions")[0];
function addSuggestion(data){
    let VThumb = document.createElement("img");
    VThumb.setAttribute("class","VThumb")
    VThumb.setAttribute("src","data/thumbnails/"+ data.videoThumb);
    let VThumbContainer = document.createElement("div");
    VThumbContainer.setAttribute("class","VThumbContainer");
    VThumbContainer.appendChild(VThumb);
    let Title = document.createElement("div");
    Title.setAttribute("class","Title")
    Title.innerHTML = data.title;
    let channelName = document.createElement("div");
    channelName.setAttribute("class","channelName")
    channelName.innerHTML = data.channelName;
    let Views = document.createElement("div");
    Views.setAttribute("class","Views")
    Views.innerHTML = data.views + " &#8226; " + data.time;
    let VDetails = document.createElement("div");
    VDetails.setAttribute("class","VDetails");
    VDetails.appendChild(Title);
    VDetails.appendChild(channelName);
    VDetails.appendChild(Views);
    let suggestionCard = document.createElement("div");
    suggestionCard.setAttribute("class","suggestionCard");
    suggestionCard.appendChild(VThumbContainer);
    suggestionCard.appendChild(VDetails);
    return suggestionCard;
}

fetch("data/data")
    .then(r => r.json())
    .then((result) => {
        addVideo(result.data[id].video);
        for(let i = 0;i<result.data.length;i++){
            suggestions.appendChild(addSuggestion(result.data[i]));
        }
    })