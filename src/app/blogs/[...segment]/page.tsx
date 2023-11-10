export const metadata = {
    title: 'Blogs Page | Learn NextJS',
    description: 'Learn NextJS & Practice next app',
  }

import React from 'react';

const SingleBlog = ({ params }) => {
    // console.log(params.id);
    //distructuring code
    const [year , id] = params.segment || [];
    return (
        <div>
            SingleBlog Page {year} for {id}
        </div>
    );
};

export default SingleBlog;