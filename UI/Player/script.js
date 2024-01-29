let params = new URLSearchParams(window.location.search);
let id = params.get("id");

function addVideo(videoPath){
    let video = document.createElement("source");
    video.setAttribute("src","data/videos/"+ videoPath);
    video.setAttribute("id","video");
    document.getElementsByClassName("Video")[0].appendChild(video)
}
function formatNumberShort(number) {
    if (number >= 1e6) {
        return (number / 1e6).toFixed(0) + 'M';
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(0) + 'K';
    } else {
        return number.toString();
    }
}

let suggestions = document.getElementsByClassName("suggestions")[0];
function suggestionCard(data,next){
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
    Views.innerHTML = formatNumberShort(data.views) + " &#8226; " + data.time;
    let VDetails = document.createElement("div");
    VDetails.setAttribute("class","VDetails");
    VDetails.appendChild(Title);
    VDetails.appendChild(channelName);
    VDetails.appendChild(Views);
    let suggestionCard = document.createElement("div");
    suggestionCard.setAttribute("class","suggestionCard");
    suggestionCard.setAttribute("onclick",`oye(${next})`);
    suggestionCard.appendChild(VThumbContainer);
    suggestionCard.appendChild(VDetails);
    return suggestionCard;
}

function addSuggestionCards(data){
    for(let i = 0;i<data.length;i++){
        suggestions.appendChild(suggestionCard(data[i],i));
    }
}
fetch("/data/VDetails/"+id).then((response)=> response.json()).then((data)=>{
    console.log(data)
    document.getElementsByClassName("Subscribers")[0].innerHTML = formatNumberShort(data.subs)+" subscribers";
    document.getElementsByClassName("likeCount")[0].innerHTML = formatNumberShort(data.likes)+"";
    document.getElementsByClassName("descriptionContent")[0].innerHTML = "<p>"+data.description.replace(/\n/g, '<br>')+"</p>";
})
function addVideoDetails(data){

    let VTitle = document.getElementsByClassName("VTitle")[0];
    VTitle.innerHTML = data.title;

    let CThumb = document.createElement("img")
    CThumb.setAttribute("class","CThumb");
    CThumb.setAttribute("src","data/channelthumb/"+data.channelThumb)
    let channelProfile = document.getElementsByClassName("channelProfile")[0];
    channelProfile.appendChild(CThumb)

    let CName = document.getElementsByClassName("CName")[0];
    CName.innerHTML = data.channelName;
    document.getElementsByClassName("views")[0].innerHTML = data.views.toLocaleString() + " views";

}

fetch("data/data")
    .then(r => r.json())
    .then((result) => {
        addVideo(result.data[id].video);
        addVideoDetails(result.data[id]);
        addSuggestionCards(result.data)
    })

function oye(id){
    window.location.href = "/player?id="+id;
}

function toggleShow(el){
    el.classList.toggle("show");
}