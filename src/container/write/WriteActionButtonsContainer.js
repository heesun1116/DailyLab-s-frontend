import React, { useEffect, useState } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    title,
    body,
    tags,
    post,
    postError,
    originalPostId,
    contributes,
    avatar,
  } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
    contributes: write.contributes,
    originalPostId: write.originalPostId,
    avatar: write.avatar,
  }));

  // publish post
  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({ title, body, tags, id: originalPostId, contributes }),
      );
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
        contributes,
        avatar,
      }),
    );
  };

  // cancel
  const onCancel = () => {
    history.goBack();
  };

  // when success or fail is happend
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
      setError('please fill the all blank!');
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!originalPostId}
      error={error}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
