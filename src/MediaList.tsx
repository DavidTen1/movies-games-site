import { useEffect, useState } from "react";
import "./MediaList.css";

interface CastMember {
    name: string;
    role: string;
}

interface MediaEntry {
    id: number;
    type: string;
    title: string;
    releaseYear: number;
    director: string;
    genre: string[];
    writer: string[];
    cast: CastMember[];
    platform: string[];
    description: string;
    rating: number;
}

const imageIndex = Math.floor(Math.random() * 3) + 1;

const API_ORIGIN = "http://localhost:8080";

function MediaList() {
    const [media, setMedia] = useState<MediaEntry[]>([]);

    useEffect(() => {
        fetch(`${API_ORIGIN}/api/media`)
            .then((res) => res.json())
            .then((data: MediaEntry[]) => setMedia(data))
            .catch((err) => console.error("Failed to fetch media:", err));
    }, []);

    return (
        <ul className="media-grid">
            {media.map((work) => (
                <li key={work.id} className="media-card">
                    <div className="media-card__poster">
                        <img
                            src={`${API_ORIGIN}/images/${encodeURIComponent(work.title)} ${imageIndex}.png`}
                            width="300"
                            height="450"
                            alt={`${work.title} poster`}
                            loading="lazy"
                        />
                        <span className="media-card__type">{work.type}</span>
                        {work.rating != null && (
                            <span className="media-card__rating">★ {work.rating.toFixed(1)}</span>
                        )}
                    </div>

                    <div className="media-card__body">
                        <h2 className="media-card__title">
                            {work.title} <span className="media-card__year">({work.releaseYear})</span>
                        </h2>

                        {work.director && (
                            <p className="media-card__director">Directed by {work.director}</p>
                        )}

                        {work.genre?.length > 0 && (
                            <ul className="media-card__tags">
                                {work.genre.map((g) => (
                                    <li key={g} className="media-card__tag">{g}</li>
                                ))}
                            </ul>
                        )}

                        {work.description && (
                            <p className="media-card__description">{work.description}</p>
                        )}

                        {work.cast?.length > 0 && (
                            <ul className="media-card__cast">
                                {work.cast.map((entry) => (
                                    <li key={entry.name} className="media-card__cast-item">
                                        <span className="media-card__cast-name">{entry.name}</span>
                                        <span className="media-card__cast-role">{entry.role}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {work.platform?.length > 0 && (
                            <ul className="media-card__platforms">
                                {work.platform.map((p) => (
                                    <li key={p} className="media-card__platform">{p}</li>
                                ))}
                            </ul>
                        )}

                        {work.writer?.length > 0 && (
                            <p className="media-card__writers">
                                Written by {work.writer.join(", ")}
                            </p>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MediaList;