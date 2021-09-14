import React, { useEffect, useState } from 'react';
import { ReactComponent as CommentIcon } from '../icons/comments.svg';
import styled from 'styled-components';

export default function Comments() {
  const [input, setInput] = useState('')
  const [listComments, setListComments] = useState([])

  const addComment = (evt) => {
	evt.preventDefault()
	setListComments(arr => [...arr, input])
	setInput('')
  }

  return (
	  <>
	<div className="comments">
		<div className="content">
			<CommentIcon />
			<Input placeholder="Adicione um comentario" type="text" value={input} onChange={(evt) => setInput(evt.target.value)} name="comment"/>
		</div>						
		{input && <a  onClick={(evt) => addComment(evt)}>Publicar</a>}
		
	</div>
	{ listComments.map(e => <CommentText><b>Jairo</b> {e}</CommentText>) }
	</>
  );
}

const Input = styled.input`
	width: 80%;
	margin-left: 20px;
	border: 0px;
	
	&:focus {
		outline: none;
	}
	
`;

const CommentText = styled.div`
	margin: 10px 0 10px 20px;
	font-size: 15px;
`;
