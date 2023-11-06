export const metadata = {
    title: 'Blogs Page | Learn NextJS',
    description: 'Learn NextJS & Practice next app',
  }

import React from 'react';

const SingleBlog = ({ params}) => {
    // console.log(params.id);
    return (
        <div>
            SingleBlog Page {params.id}
        </div>
    );
};

export default SingleBlog;