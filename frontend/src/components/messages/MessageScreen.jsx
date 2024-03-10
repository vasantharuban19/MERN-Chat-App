import React from "react";
import Messages from "./Messages";
import MessageBox from "./MessageBox";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageScreen = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-grey-900 font-bold">
              {selectedConversation.username}
            </span>
          </div>
          <Messages />
          <MessageBox />
        </>
      )}
    </div>
  );
};

export default MessageScreen;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username} ❄</p>
        <p>Select a friend to start messaging</p>
        <LuMessagesSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
