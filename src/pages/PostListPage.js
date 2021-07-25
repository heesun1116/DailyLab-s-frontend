import React from 'react';
import NavbarContainer from '../container/common/NavbarContainer';
import PostListContainer from '../container/posts/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <NavbarContainer />
      <PostListContainer />
      {/* <PaginationContainer /> */}
    </div>
  );
};
export default PostListPage;
