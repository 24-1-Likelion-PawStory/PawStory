import React, { createContext, useState } from "react";

export const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
  const [diaries, setDiaries] = useState([]);

  const addDiary = (dairy) => {
    setDiaries([...diaries, dairy]);
  };

  const addComment = (diaryId, comment) => {
    setDiaries((prevDiaries) =>
      prevDiaries.map((diary) =>
        diary.id === diaryId ? { ...diary, comments: [...(diary.comments || []), comment] } : diary
      )
    );
  };

  const toggleLike = (diaryId) => {
    setDiaries((prevDiaries) =>
      prevDiaries.map((diary) =>
        diary.id === diaryId ? { ...diary, liked: !diary.liked } : diary
      )
    );
  };

  const updatediary = (diaryId, title, content) => {
    setDiaries(diaries.map(diary =>
      diary.id === diaryId ? { ...diary, title, content } : diary
    ));
  };

  const deletediary = (diaryId) => {
    setDiaries(diaries.filter(diary => diary.id !== diaryId));
  };

  const deleteComment = (diaryId, commentId) => {
    console.log(`Deleting comment with diaryId: ${diaryId} and commentId: ${commentId}`);
    setDiaries((prevDiaries) =>
      prevDiaries.map((diary) =>
        diary.id === diaryId
          ? { ...diary, comments: diary.comments.filter(comment => comment.id !== commentId) }
          : diary
      )
    );
  };

  return (
    <DiaryContext.Provider value={{ diaries, addDiary, addComment, toggleLike, updatediary, deletediary, deleteComment }}>
      {children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;

