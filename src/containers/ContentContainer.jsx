import React from 'react';
import CSSModules from 'react-css-modules';
import BlogPost from '../components/BlogPost';
import SidebarContainer from './SidebarContainer';
import styles from './_ContentContainer.scss';

const blog = {
  title: 'Blog #1',
  content: `Summary of this blog

## Next Heading

Some other paragraph

    import React from 'react';
    
    export default MyComponent = ({ many, props, to, make, a, long, line }) => (
      <div>
        <h1>Header</h1>
      </div>
    );

Some inline \`code.here()\` looks good!

Cats?!

![image](https://placehold.it/900x300)

And then a list:

1. Item #1
2. Item #2
    - Subitem
    - Another subitem
3. Last item

Bye ;)
`,
  author: 'Dan',
  tags: ['test', 'react'],
};

const ContentContainer = () => (
  <div styleName="body">
    <div styleName="sidebar" >
      <SidebarContainer />
    </div>
    <div styleName="main">
      <BlogPost {...blog} />
    </div>
  </div>
);

export default CSSModules(ContentContainer, styles);
