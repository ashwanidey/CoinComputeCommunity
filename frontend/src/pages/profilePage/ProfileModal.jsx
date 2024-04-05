import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import EachPerson from "./EachPerson";
import { UserContext } from "../../context/UserContext";

const ProfileModal = (props) => {
  const [isloading, setIsLoading] = useState(true);

  return (
    <>
      {isloading && (
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="font-[900] text-gray-900"
            >
              {props.isFollowers ? "FOLLOWERS" : "FOLLOWING"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.followers ? (
              props.followers.length !== 0 ? (
                props.followers.map((follower) => {
                  return <EachPerson data={follower} />;
                })
              ) : (
                <>
                  <div>No Followers</div>
                </>
              )
            ) : (
              <>
                <div class="px-3 py-1 w-auto text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                  loading...
                </div>
              </>
            )}
          </Modal.Body>
          {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
