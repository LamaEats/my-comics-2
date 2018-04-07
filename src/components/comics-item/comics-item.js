import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../cover/cover'


export const ComicsItem = (props) => {
    let { description, title, thumbnail: { path, extension} } = props;
    
    return (
        <div className={"comics-item"}>
            <div className="comics-item__wrapper">
                <figure className="comics-item__picture">
                    <Cover path={path} ext={extension} />
                    {/*<img src={path + '/landscape_incredible.' + extension}/>*/}
                </figure>
                <figcaption className="comics-item__caption">
                    <ComicsTitle title={title}/>
                    <ComicsDescription description={description}>
                        <Link to="/" className="comics-item__link">
                            More&nbsp;<i className="glyphicon glyphicon-circle-arrow-right" />
                        </Link>
                    </ComicsDescription>
                </figcaption>
            </div>
        </div>
    );
};

const truncate = (string, affix = '...', length = 30) => {
    return string && string.length > length
        ? string.substr(0, length) + affix
        : string
};

const ComicsTitle = ({title}) => {
    const defaultTitle = title;
    title = truncate(title);

    return <h3 className="comics-item__title" title={defaultTitle !== title ? defaultTitle : undefined}>
        {title}
    </h3>
};

const ComicsDescription = ({description, children}) => {
    return <p className="comics-item__description">
        {truncate(description, '...', 150)}
        {children}
    </p>
}


