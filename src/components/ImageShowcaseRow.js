export function ImageShowcaseRow({ data }) {
    const divStyle = {
        backgroundImage: data.img ? `url(${data.img})` : 'none',
    };
    const divClassName1 = data.id % 2 !==0 ? "col-lg-6 order-lg-2 text-white showcase-img" : "col-lg-6 text-white showcase-img";
    const divClassName2 = data.id % 2 !==0 ? "col-lg-6 order-lg-1 my-auto showcase-text" : "col-lg-6 my-auto showcase-text";
    return (
        <div className="row g-0">
            <div className={divClassName1} style={divStyle}></div>
            <div className={divClassName2}>

                <h2>{data.description.title}</h2>
                <p className="lead mb-0">{data.description.long}</p>
            </div>
        </div>
    );
}
