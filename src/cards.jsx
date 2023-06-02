import React, {Component} from "react";
import Card from "./cardui";
import img1 from "../src/Assets/shakshuka.jpeg";
import img2 from "../src/Assets/prawn_fideua.jpeg";
import img3 from "../src/Assets/salad_nicoise.jpeg";
import img4 from "../src/Assets/kedgeree.jpeg";
import img5 from "../src/Assets/chickpea_curry.jpeg";


class cards extends Component {
  render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col mx-1">
                        <Card imgsrc={img1} title="Monday" text="SHAKSHUKA"/>
                    </div>
                    <div className="col mx-1">
                        <Card imgsrc={img2} title="Tuesday" text="PRAWN FIDEUA"/>
                    </div>
                    <div className="col mx-1">
                        <Card imgsrc={img3} title="Wednesday"text="SALAD NICOISE"/>
                    </div>
                    <div className="col mx-1">
                        <Card imgsrc={img4} title="Thursday" text="KEDGEREE"/>
                    </div>
                    <div className="col mx-1">
                        <Card imgsrc={img5} title="Friday" text="CHICKPEA CURRY"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default cards;