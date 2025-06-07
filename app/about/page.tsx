import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "../components/nav"
import { Header } from "../components/header"

export default function Page() {
    return <div>
        <div className="container py-4">
            <div className="row">

                <Header />

                <Nav />

                <div className="col-9">
                    <h1>This is the About page</h1>
                    <p>
                        About About About
                    </p>
                </div>

            </div>
        </div>

    </div>
}