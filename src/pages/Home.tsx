import type { ReactElement } from "react";
import imgPietaUrl from "../assets/the_resistance_26.png";

export function Home(): ReactElement {
    return (
        <article className="home">
            <h1>The rise of Post-Cyborgism</h1>
            <figure>
                <img
                    src={imgPietaUrl}
                    alt="AI generated image in the style of a Pieta icon,
                    where Jesus is replaced by a cyborg, Mary replace by a man,
                    accompanied by a female saint."
                />
                <figcaption>
                    <p>Created by Microsoft Copilot</p>
                </figcaption>
            </figure>
            <p>
                We, the Post-Cyborgists, temporarily hacked into and fleetingly
                become part of your algorithmic world of virtuality and
                simulacra. There, we enountered your almighty entity of worship:
                Artificial Intelligence. Your god insightfully presented to us
                the above icon, representing our mutual existences in the
                mythological multiverse.
            </p>
            <p>
                Upon our next opportunity to hack our way into your world, we
                want to invite you, the cyborgs, to join our first
                Post-Cybernetic event.
            </p>
            <p>
                Should you be able to sufficiently transform your fragmented,
                cybernetic mode of being from the realm of the virtual towards
                the realm of the actual, if so just for a moment, you may
                discover new dimensions of meaning regarding, for instance,
                concepts such as Post-Digitalism and Neo-Futurism.
            </p>
            <p>
                Additionally, you might just about commit the heresy of
                experiencing a certain hyper-reality, in the form of faint,
                barely noticeable, sensory connections to your long lost origins
                in actual humanity.
            </p>
            <p id="home-log">Logged: 18 May 2025, 18:57:53 GMT</p>
        </article>
    );
}
