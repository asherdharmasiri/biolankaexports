import React from "react";
import * as classes from "./Coconut.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import ProductCard from "../../../ui/ProductCard/ProductCard";
import dc from '../../../images/kernal-products/desiccated-coconut.jpg';

const Coconut = () => {
    console.log(dc)
    return (<div>
        <div>
            <StaticImage src="../../../images/coconut-strip.png" width={1920}/>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Kernal Products</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Desiccated Coconut"
                             image={<StaticImage src="../../../images/kernal-products/desiccated-coconut.jpg"/>}/>
                <ProductCard title="Coconut Oil"
                             image={<StaticImage src="../../../images/kernal-products/coconut-oil.webp"/>}/>
                <ProductCard title="Copra"
                             image={<StaticImage src="../../../images/kernal-products/copra.jpg"/>}/>
                <ProductCard title="Defatted Coconut"
                             image={<StaticImage src="../../../images/kernal-products/defatted.webp"/>}/>
                <ProductCard title="Coconut Milk Powder"
                             image={<StaticImage src="../../../images/kernal-products/coconut-milk-powder.jpeg"/>}/>
                <ProductCard title="Coconut Milk"
                             image={<StaticImage src="../../../images/kernal-products/coconut-milk.jpg"/>}/>
                <ProductCard title="Coconut Vinegar"
                             image={<StaticImage src="../../../images/kernal-products/coconut-vinegar.webp"/>}/>
                <ProductCard title="Coconut Butter"
                             image={<StaticImage src="../../../images/kernal-products/coconut-butter.webp"/>}/>
                <ProductCard title="King Coconut Water"
                             image={<StaticImage src="../../../images/kernal-products/king-coconut-water.webp"/>}/>
                <ProductCard title="Coconut Flour"
                             image={<StaticImage src="../../../images/kernal-products/coconut-flour.jpg"/>}/>
                <ProductCard title="Low Fat DC"
                             image={<StaticImage src="../../../images/kernal-products/low-fat-dc.jpg"/>}/>
                <ProductCard title="MCT Oil"
                             image={<StaticImage src="../../../images/kernal-products/mct-oil.jpg"/>}/>
            </div>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Semi Processed Nuts</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Coconut Wihout Husk"
                             image={<StaticImage src="../../../images/kernal-products/husked.jpg"/>}/>
                <ProductCard title="Coconut Semi Husked"
                             image={<StaticImage src="../../../images/kernal-products/semi-husked.jpg"/>}/>
            </div>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Non Kernal Products - Raw</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Omat Fiber"
                             image={<StaticImage src="../../../images/kernal-products/omat.jpg"/>}/>
                <ProductCard title="Mattress Fiber"
                             image={<StaticImage src="../../../images/kernal-products/mattress.jpeg"/>}/>
                <ProductCard title="Twisted Fiber"
                             image={<StaticImage src="../../../images/kernal-products/twisted.jpg"/>}/>
                <ProductCard title="Fiber Pith/Dust"
                             image={<StaticImage src="../../../images/kernal-products/pith.webp"/>}/>
                {/*<ProductCard title="Other" image={<StaticImage src="../../../images/kernal-products/mct-oil.jpg"/>}/>*/}
            </div>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Non Kernal Products - Value Added</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Coir Yarn" image={<StaticImage src="../../../images/kernal-products/yarn.jpg"/>}/>
                <ProductCard title="Coir Twine"
                             image={<StaticImage src="../../../images/kernal-products/coir-twine.jpg"/>}/>
                <ProductCard title="Moulded Coir Products"
                             image={<StaticImage src="../../../images/kernal-products/moulded-coir.jpg"/>}/>
                <ProductCard title="Rubberized Coir Products"
                             image={<StaticImage src="../../../images/kernal-products/rubberized.webp"/>}/>
                <ProductCard title="Carpets, Mats & Rugs"
                             image={<StaticImage src="../../../images/kernal-products/rug.jpg"/>}/>
                <ProductCard title="Ekel Brooms"
                             image={<StaticImage src="../../../images/kernal-products/ekel.jpg"/>}/>
                <ProductCard title="Compressed Husk Chips"
                             image={<StaticImage src="../../../images/kernal-products/compressed-chips.jpg"/>}/>
                <ProductCard title="Ornamental Products"
                             image={<StaticImage src="../../../images/kernal-products/ornamental.jpg"/>}/>
                <ProductCard title="Tawashi Brushes"
                             image={<StaticImage src="../../../images/kernal-products/tawashi.jpg"/>}/>
                <ProductCard title="Other Value added husk based products"
                             image={<StaticImage src="../../../images/kernal-products/other-husk.jpg"/>}/>
            </div>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Non Kernal Products</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Coconut Shell Pieces"
                             image={<StaticImage src="../../../images/kernal-products/shell-pieces.webp"/>}/>
                <ProductCard title="Coconut Shell Powder"
                             image={<StaticImage src="../../../images/kernal-products/powder.webp"/>}/>
                <ProductCard title="Coconut Ekels"
                             image={<StaticImage src="../../../images/kernal-products/broom.png"/>}/>
                <ProductCard title="Activated Carbon"
                             image={<StaticImage src="../../../images/kernal-products/carbon.jpg"/>}/>
            </div>
        </div>
        <div className={classes.Sub}>
            <div className={classes.SubHeading}>
                <h2>Other Coconut Products</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
                    molestiae laborum suscipit repellendus qui dicta porro, impedit
                </p>
            </div>
            <div className={classes.SubProduct}>
                <ProductCard title="Coconut Wood" image={<StaticImage src="../../../images/kernal-products/coconut-wood.webp"/>}/>
                <ProductCard title="Matured Coconut Leaves & Others" image={<StaticImage src="../../../images/kernal-products/leaf.jpg"/>}/>
            </div>
        </div>
    </div>);
};

export default Coconut;
