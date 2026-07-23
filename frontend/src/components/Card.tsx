import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string,
    link: string,
    type: "spotify" | "youtube"
}

export function Card(props: CardProps) {
    return(
        <div className="bg-white rounded-md border-gray-200 border p-4 max-w-72 min-h-48">
            <div className="flex justify-between">
                <div className="flex items-center text-sm">
                    <div className="text-gray-500 pr-4">
                        <ShareIcon/>
                    </div>
                   {props.title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon/>
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon/>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                {props.type === "youtube" && <iframe className="w-full" src={props.link.replace("watch","embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
                {props.type === "spotify" && <iframe data-testid="embed-iframe" className="w-full" src={props.link} frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>}
            </div>
        </div>
    )
}