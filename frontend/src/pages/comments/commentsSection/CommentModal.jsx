import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const CommentModal = ({ showCommentModal, setShowCommentModal, postId }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Modal
        show={showCommentModal}
        size="xl"
        onClose={() => setShowCommentModal(false)}
        popup
        className="overflow-x-auto"
      >
        <Modal.Header className="h-0 z-10" />
        <Modal.Body className="rounded-lg">
          <div className="space-y-4 rounded-lg">
            <div className="">
              <h3 className="text-3xl font-[800] text-gray-900 ">Comment</h3>
            </div>

            <CreateComment postId={postId} />
          </div>
          <a
            href={`/comments/${postId}`}
            type="button"
            class="text-white mt-4 bg-[#151314]  font-[600] rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 w-full text-decoration-none"
          >
            View Comments
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentModal;
