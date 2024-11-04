import React from 'react';
import styled from 'styled-components';

const CommentsContainer = styled.section`
  padding: 40px 20px;
  background: #f9f9f9;
`;

const CommentTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CommentCard = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  border-radius: 8px;
`;

const CommentText = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.p`
  font-size: 0.9em;
  color: #555;
`;

const Comments = () => {
  const comments = [
    { text: "Me gusta la aplicación es muy interactiva y muy útil", author: "Pablo Lopez" },
    { text: "Me gusta la aplicación me siento más seguro sabiendo que pueden notificar a mis familiares", author: "Juan Jose" },
    { text: "A mí me gustó porque puedes conectarte a la aplicación donde sea que me encuentre", author: "Ben 10" },
    { text: "Por queeeee eresss mi novioooooooooooooooooooooo Cristiaaaaaaaaaaaaaaaaaaaan", author: "Angela Aguilar" },
    { text: "La página es muy buena ya que aporta información acerca de mi ubicación", author: "Marta Higareda" },
    { text: "Cheee voludo la aplicación la recomendó un amigo y me sirvió demasiado", author: "Messi" },
  ];

  return (
    <CommentsContainer>
      <CommentTitle>Comentarios</CommentTitle>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentCard key={index}>
            <CommentText>{comment.text}</CommentText>
            <CommentAuthor>{comment.author}</CommentAuthor>
          </CommentCard>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default Comments;