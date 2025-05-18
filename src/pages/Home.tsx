import type { ReactElement } from "react";
import imgPietaUrl from "../assets/the_resistance_26.png";

export function Home(): ReactElement {
    return (
        <article className="home">
            <h1>The rise of Post-Cyborgism!</h1>
            <figure>
                <img
                    src={imgPietaUrl}
                    alt="AI generated image in the style of a Pieta icon, where Jesus is replaced by a cyborg, Mary replace by a man, accompanied by a female saint."
                />
            </figure>
            <p>
                We, the Post-Cyborgists, temporarily succeeded in hacking into,
                and thus fleetingly become part of, your world of simulacra.
                Upon our next opportunity, we want to invite you, the cyborgs,
                to join our first Post-Cybernetic event.
            </p>
            <p>
                Should you be able to sufficiently transform your fragmented
                existence, if so just for a moment, you might discover a new
                meaning to the notions of Post-Digitalism and Neo-Futurism. You
                may even be able to experience some faint, hyper-real, sensory
                connections to your long lost origin of actual humanity.
            </p>
            <p id="home-log">Logged: 18 May 2025, 18:57:53 GMT</p>
        </article>
    );
}
