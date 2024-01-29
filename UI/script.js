
const VcardContainerCol = document.getElementsByClassName("VCardContainerCol")[0];
function createVcard(data,id){
    let videoName = document.createElement("div");
    videoName.setAttribute("class", "videoName");
    videoName.innerText = data.title;
    let channelName = document.createElement("div");
    channelName.setAttribute("class", "channelName");
    channelName.innerText = data.channelName;
    let views = document.createElement("div");
    views.setAttribute("class", "views");
    views.innerHTML = data.views + " &#8226; " + data.time;
    let videoDetails = document.createElement("div");
    videoDetails.setAttribute("class", "videoDetails");
    videoDetails.appendChild(videoName);
    videoDetails.appendChild(channelName);
    videoDetails.appendChild(views);
    let img = document.createElement("img");
    img.setAttribute("class", "CIcon");
    img.setAttribute("src", "data/channelthumb/"+data.channelThumb);
    let channelIcon = document.createElement("div");
    channelIcon.setAttribute("class", "channelIcon");
    channelIcon.appendChild(img)
    let VDetailContainer = document.createElement("div");
    VDetailContainer.setAttribute("class", "VDetailContainer");
    VDetailContainer.appendChild(channelIcon);
    VDetailContainer.appendChild(videoDetails);
    img = document.createElement("img");
    img.setAttribute("class", "thumb");
    img.setAttribute("src", "data/thumbnails/"+data.videoThumb);
    let Vthumb = document.createElement("div");
    Vthumb.setAttribute("class", "VThumb");
    Vthumb.appendChild(img);
    let VideoCard  = document.createElement("div");
    VideoCard.setAttribute("class", "VideoCard");
    VideoCard.setAttribute("onclick",`oye(${id})`);
    VideoCard.appendChild(Vthumb);
    VideoCard.appendChild(VDetailContainer)
    return VideoCard;
}
fetch("data/data").then(r => r.json()).then( (result) => {
    let VcardContainerRow= VcardContainerCol.lastElementChild;
    for(let i = 0; i < result.data.length; i++){
        if(VcardContainerCol.lastElementChild.childNodes.length >= 3) {
            console.log(VcardContainerCol.lastElementChild.childNodes.length);
            VcardContainerRow = document.createElement("div");
            VcardContainerRow.setAttribute("class", "VCardContainerRow");
            VcardContainerRow.appendChild(createVcard(result.data[i]))
            VcardContainerCol.appendChild(VcardContainerRow);
        }else{
            console.log(VcardContainerRow.childNodes.length);
            VcardContainerCol.lastElementChild.appendChild(createVcard(result.data[i],i))
        }
    }
})

function oye(id){
    window.location.href = "/player?id="+id;
}