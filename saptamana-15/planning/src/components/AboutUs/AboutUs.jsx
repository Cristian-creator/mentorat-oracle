import './AboutUs.css'

import pictureOne from '../../assets/picture-one.jpeg';
import imagePlaceholder from '../../assets/image-placholder.svg';

const AboutUs = () => {
    const data = [
        {
            title: 'Item 1',
            description: 'Lorem ipsum item 1 ......'
        },
        {
            title: 'Item 2',
            description: 'Lorem ipsum item 2 ......'
        },
        {
            image: pictureOne,
            title: 'Item 3',
            description: 'Lorem ipsum item 3 ......'
        },
        {
            title: 'Item 4',
            description: 'Lorem ipsum item 4 ......'
        },
        {
            title: 'Item 5',
            description: 'Lorem ipsum item 5 ......'
        },
        {
            title: 'Item 6',
            description: 'Lorem ipsum item 6 ......'
        },
    ];

    const numeleMeu = 'Cristian';

    return (
        <section className="about-us-section">
            <h2> About us </h2>
            <h3> Salut, {numeleMeu} </h3>
            <div className="about-us-cards">

                {/* randare dinamica */}
                {data.map((element) => (
                    <div key={element.title}>
                        {/* randare conditionala */}
                        <img src={element.image === undefined ? imagePlaceholder : element.image} />
                        <p> {element.title} </p>
                        <p> {element.description} </p>
                    </div>
                ))}

                {/* <div>
                    <p> Item 1 </p>
                </div>
                <div>
                    <p> Item 2 </p>
                </div>
                <div>
                    <p> Item 3 </p>
                </div>
                <div>
                    <p> Item 4 </p>
                </div> */}

            </div>
        </section>
    )
}

export default AboutUs;