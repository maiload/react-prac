import Comment from './Comment';

const comments = [
    {
        name: "이정진",
        comment: "안녕하세요, 네오입니다.",
    },
    {
        name: "유재석",
        comment: "저도 리액트 배워보고 싶어요",
    },
    {
        name: "강민경",
        comment: "전 자바가 좋아요",
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>
                <Comment name={comment.name} comment={comment.comment}/>
            )}
        </div>
    );
}

export default CommentList;