import React from 'react';
import ReactMarkdown from 'react-markdown';
import CSSModules from 'react-css-modules';
import styles from './_BlogPost.scss';

const BlogPost = ({ title, body, tags }) => (
    <section styleName="post">
        <h1>{title}</h1>
        <div styleName="tags">
            {tags.map(tag => <span key={tag} styleName="tag">{tag}</span>)}
        </div>
        <ReactMarkdown styleName="markdown" source={body} />
    </section>
);

BlogPost.propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default CSSModules(BlogPost, styles);
