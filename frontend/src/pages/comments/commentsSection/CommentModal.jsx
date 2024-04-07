import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Comments from "./Comments";

const CommentModal = ({ showCommentModal, setShowCommentModal, postId }) => {
  const [email, setEmail] = useState("");

  const data = [
    {
      name: "Ashwani Dey",
      username: "ashking",
      description: `DF/USDT Chart Overview


Trending Up: DF/USDT is climbing, hitting new highs & rebounding off the 200 EMA. It's broken a trendline and is now set to soar even higher!


expecting Target $0.0754 & $0.09 if hold 200 EMAadsadssssadasdsadasdasdsadsadsadsfhjasfhabfjdhbfjsdbfsdjkhfsdfhjksdbhjksksbhjksdbjhkdsbkjsbksdisbkvsdbusdkvbsdkhdskvbsdkjksdbvbvkhsdbvksbvhksvuksvjksvbksdksbvhskdsbvksbvksdkjdcbdkjb`,
    },
  ];

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
        <Modal.Body>
          <div className="space-y-4 ">
            <div className="">
              <h3 className="text-3xl font-[800] text-gray-900 dark:text-white">
                Comment
              </h3>
            </div>

            <form>
              <div class="w-full mb-4  dark:bg-gray-700 dark:border-gray-600">
                <div class=" bg-white rounded-t-lg dark:bg-gray-800">
                  <label
                    for="comment"
                    class=" text-gray-800 font-[600] text-lg py-2 "
                  >
                    Your Reply
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    class=" border border-gray-200  rounded-lg px-4 py-3 w-full  text-sm text-gray-900 bg-gray-200 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  />
                </div>
                <div class="flex items-center justify-between   dark:border-gray-600">
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto"
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a
            href={`comments/${postId}`}
            type="button"
            class="text-white bg-[#151314]  font-[600] rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 w-full"
          >
            View Comments
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentModal;
