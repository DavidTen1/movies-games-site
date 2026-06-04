type CastMember = {
    actor: string;
    character: string;
};

type DisplayedWorkProps = {
    id: number;
    isFiction: boolean;

    title: string;
    type: string;
    genre: string[];
    releaseYear: number;

    availableOn: string[];
    priceType: string;
    image: string;

    description: string;
    plotSummary: string;
    idea: string;

    // Not always present
    category?: string;
    platforms?: string[];
    seasons?: number;
    duration?: string;

    // Present, but sometimes null
    developer?: string | null;
    publisher?: string | null;

    // Can be a string or an array in your dataset
    director?: string | string[];
    writer?: string | string[];

    cast?: CastMember[];
};


const displayedWork = (props : DisplayedWorkProps) => {
    return <><h1>{props.title}({props.releaseYear})</h1>
        <p>{props.availableOn}</p>
        <div><p>{props.description}</p>
            <p>{props.plotSummary}</p></div>
       </>;

};



export default displayedWork;