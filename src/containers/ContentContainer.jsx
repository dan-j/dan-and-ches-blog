import React from 'react';
import CSSModules from 'react-css-modules';
import BlogPost from '../components/BlogPost';
import SidebarContainer from './SidebarContainer';
import api from '../services/api';
import styles from './_ContentContainer.scss';

class ContentContainer extends React.Component {

    constructor(props) {
        super(props);

        // posts should be an array of objects with keys: title,
        this.state = {
            posts: null,
        };
    }

    componentDidMount() {
        api.getBlogs()
            .then(posts => this.setState({ posts }));
    }

    render() {
        let content;

        if (this.state.posts) {
            if (this.state.posts.length > 0) {
                content = this.state.posts.map(post => (
                    <BlogPost key={post.sys.id} {...post.fields} />
                ));
            } else {
                content = <h3>There are no posts</h3>;
            }
        } else {
            content = <h3>Loading posts</h3>;
        }

        return (
            <div styleName="body">
                <div styleName="sidebar">
                    <SidebarContainer />
                </div>
                <div styleName="main">
                    {content}
                </div>
            </div>
        );
    }

}


export default CSSModules(ContentContainer, styles);
