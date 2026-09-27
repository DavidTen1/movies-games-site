import { useEffect, useState } from "react";
const decorativeImages = [
    "cowboy-bebop.png",
    "dickinson.png",
    "hitman-2-silent-assassins.png",
    "lego-batman-game.png",
    "minecraft.png",
    "rayman.png",
    "scarface.png",
    "south-park.png",
    "spider-man-spider-verse.png",
    "splinter-cell-blacklist.png",
    "spongebob-movie-2004.png",
    "super-mario-galaxy-movie.png",
    "the-clone-wars.png",
    "thomas-and-friends.png",
    "victorious.png",
    "x-files.png",
];

const API_ORIGIN = "http://localhost:8080";

 function MediaGridBanner() {

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 150px)",
                gridAutoRows: "150px",
                gap: "8px",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            {decorativeImages.map((src, i) => (
                <div
                    key={i}
                    style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={API_ORIGIN +"/promoImages/"+ src}
                        alt=""
                        style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                            margin: 0,
                            padding: 0,
                        }}
                    />
                </div>
            ))}
        </div>
);
}

export default MediaGridBanner;