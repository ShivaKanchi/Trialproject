// import React from 'react'

// const WordSphere = () => {
//     return (
//         <>
//             <h1>WordSphere</h1>

//         </>
//     )
// }

// export default WordSphere

$(document).ready(function () {
    var entries = [
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
        { label: "Hello" },
    ];

    var settings = {
        entries: entries,
        width: 480,
        height: 480,
        raidus: "65%",
        bgColor: "rgba(0,0,0,0)",
        speed: 0.5,
        fontFamily: "oswald, Arial, sans-serif",
        fontColor: "#fff",
        tootltipDiffX: 0,
        tootltipDiffY: 10,
    };

    var svg3DTagCloud = new SVG3DTagCloud(document.getElementById("holder"), settings)

})