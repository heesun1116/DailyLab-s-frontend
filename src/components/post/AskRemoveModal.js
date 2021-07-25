import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visivle, onConfirm, onCancle }) => {
  return (
    <AskModal
      visible={visivle}
      title="Post Delete"
      description="Do you really want to delete post?"
      confirmText="Delete"
      onConfirm={onConfirm}
      onCancle={onCancle}
    />
  );
};

export default AskRemoveModal;
