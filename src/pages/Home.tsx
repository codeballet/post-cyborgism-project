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
                and fleetingly become part of, your world of simulacra. Upon our
                next opportunity, we want to invite you, the cyborgs, to join
                our first Post-Cybernetic event.
            </p>
            <p>
                Should you be able to sufficiently transform your fragmented,
                cybernetic existence in the realm of the virtual, if so just for
                a moment, you may not only discover a new meaning to, for
                instance, notions of Post-Digitalism and Neo-Futurism. In
                addition, you might just about experience a touch of
                hyper-reality, in the form of faint, sensory connections to your
                long lost origins in actual humanity.
            </p>
            <p id="home-log">Logged: 18 May 2025, 18:57:53 GMT</p>
        </article>
    );
}
