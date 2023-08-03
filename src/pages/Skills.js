import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import img from "../components/img/Skills/Moon landing station.jpeg"
import "./Css/Skills.css"
import Social from "../components/Social";




const Skills = () => {


    return (
        <div id="skills" className="ContainerTotal">



            <section className="ContainerSkills">

                <h1 className="h1Skills"> Skills</h1>

                <div className="SeccionCard">

                    <div className="ContainerCard ">

                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />


                    </div>

                    <h2 className="h2Lenguaje"> Lenguajes </h2>

                    <div className="containerLenguajes">

                        <Social/>

                    </div>



                </div>



            </section>




        </div>

    )
}

export default Skills;