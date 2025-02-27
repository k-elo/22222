document.addEventListener("DOMContentLoaded", () => {
    const commentsSection = document.getElementById("comments");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    
    if (commentForm) {
        commentForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const commentText = commentInput.value.trim();
            if (commentText !== "") {
                const newComment = document.createElement("p");
                newComment.textContent = commentText;
                commentsSection.appendChild(newComment);
                commentInput.value = "";
            }
        });
    }
});
