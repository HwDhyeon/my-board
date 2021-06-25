import React from 'react';

const Article = ({ title, hasImage, owner, created_at, content }) => {
  return (
    <div className="mb-4">
      <h3>
        {title}
        {hasImage ? '★' : '☆'}
      </h3>
      <div className="mb-2">
        <div>작성자: {owner}</div>
        <div>등록일: {created_at}</div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Article;
