/** @format */

import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

function Home() {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img
                    src={vg}
                    alt="Grapics"
                />
                <div>
                    <p>
                        We are your one and only solution to the tech problems
                        you face every day. We are leading tech company whoseaim
                        is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div
                id="about"
                className="home3">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsum delectus repudiandae perferendis optio est
                        facilis officiis reprehenderit repellat harum,
                        consequuntur minus labore ratione eum nobis cumque odio
                        vero laborum fugit, numquam accusantium aliquam sit
                        quidem suscipit! Atque, ipsa dolor fugiat natus iste
                        illum! Voluptatem autem aut explicabo necessitatibus,
                        blanditiis quaerat! Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.<br></br>
                        <br></br> Optio iure unde ducimus assumenda quaerat
                        quisquam error nam nobis deserunt? Eius. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Quos,
                        voluptas. Voluptate quo cum vel magni dolorem quisquam!
                        Ducimus amet maiores porro id sapiente quisquam quaerat,
                        expedita aliquid reprehenderit, non accusamus! Quidem
                        consequatur quisquam ratione, fugit animi sint hic? Non
                        alias dolores maxime doloremque autem maiores quo sit
                        fuga sequi quas.
                    </p>
                </div>
            </div>
            <div
                className="home4"
                id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home;
