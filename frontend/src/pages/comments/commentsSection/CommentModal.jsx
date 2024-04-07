
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Comments from "./Comments";
import CreateComment from "../../../components/CreateComment";

const CommentModal = ({showCommentModal,setShowCommentModal,postId}) => {
  
  const [email, setEmail] = useState('');

  const data = [
    {name : "Ashwani Dey" , username: "ashking" ,description : `DF/USDT Chart Overview


Trending Up: DF/USDT is climbing, hitting new highs & rebounding off the 200 EMA. It's broken a trendline and is now set to soar even higher!


expecting Target $0.0754 & $0.09 if hold 200 EMAadsadssssadasdsadasdasdsadsadsadsfhjasfhabfjdhbfjsdbfsdjkhfsdfhjksdbhjksksbhjksdbjhkdsbkjsbksdisbkvsdbusdkvbsdkhdskvbsdkjksdbvbvkhsdbvksbvhksvuksvjksvbksdksbvhskdsbvksbvksdkjdcbdkjb`}
  ]

  

  return (
    <>
      
      <Modal show={showCommentModal} size="xl" onClose={() => setShowCommentModal(false)} popup className="overflow-x-auto">
        <Modal.Header className="h-0 z-10"/>
        <Modal.Body >
          <div className="space-y-4 ">
            <div className="">
            <h3 className="text-3xl font-[800] text-gray-900 dark:text-white">Comment</h3>
            
            </div>
            
            
        <CreateComment postId={postId}/>
        </div>
        <a href={`comments/${postId}`} type="button" class="text-white mt-4 bg-[#151314]  font-[600] rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 w-full text-decoration-none">View Comments</a>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default CommentModal