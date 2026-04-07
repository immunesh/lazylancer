// import React, { useEffect, useState } from "react";
// import socket from "../socket";
// import { useDispatch, useSelector } from "react-redux";
// import API from "../utils/axios";

// import {
//   getConversations,
//   getMessages,
//   sendMessageAPI,
//   setSelectedUser,
//   setSelectedConversation,
//   addMessage,
//   updateConversationLastMessage,
//   markMessagesSeen,
//   setUserOnline,
//   setUserOffline,
//   setTypingUser,
//   incrementUnread,
//   clearUnread,
// } from "../redux/slices/chatSlice";

// const MessagesPanel = () => {
//   const dispatch = useDispatch();

//   const { data } = useSelector((state) => state.profile);
//   const currentUser = data?.user || data;

//   const {
//     conversations = [],
//     messages = [],
//     selectedUser,
//     onlineUsers = [],
//     typingUser,
//     unreadCounts = {},
//   } = useSelector((state) => state.chat);

//   const [message, setMessage] = useState("");

//   // LOAD
//   useEffect(() => {
//     dispatch(getConversations());
//   }, [dispatch]);

//   // SOCKET JOIN
//   useEffect(() => {
//     if (currentUser?._id) {
//       socket.emit("join", currentUser._id);
//     }
//   }, [currentUser]);

//   // ONLINE
//   useEffect(() => {
//     socket.on("userOnline", (id) => dispatch(setUserOnline(id)));
//     socket.on("userOffline", (id) => dispatch(setUserOffline(id)));

//     return () => {
//       socket.off("userOnline");
//       socket.off("userOffline");
//     };
//   }, [dispatch]);

//   // RECEIVE
//   // useEffect(() => {
//   //   const handleReceive = (msg) => {
//   //     if (String(msg.sender) === String(currentUser._id)) return;

//   //     dispatch(updateConversationLastMessage(msg));

//   //     if (
//   //       selectedUser &&
//   //       (msg.sender === selectedUser._id || msg.receiver === selectedUser._id)
//   //     ) {
//   //       dispatch(incrementUnread(msg.sender));
//   //       dispatch(addMessage(msg));

//   //       // 🔥🔥 YAHI MISSING THA
//   //       socket.emit("seen", {
//   //         conversationId: msg.conversationId,
//   //         sender: msg.sender,
//   //       });
//   //     }
//   //   };

//   //   socket.on("receiveMessage", handleReceive);
//   //   return () => socket.off("receiveMessage", handleReceive);
//   // }, [selectedUser, currentUser, dispatch]);

//   useEffect(() => {
//     const handleReceive = (msg) => {
//       if (String(msg.sender) === String(currentUser._id)) return;

//       dispatch(updateConversationLastMessage(msg));

//       // 🔥 CASE 1: CHAT OPEN HAI → NO UNREAD
//       if (selectedUser && msg.sender === selectedUser._id) {
//         dispatch(addMessage(msg));

//         socket.emit("seen", {
//           conversationId: msg.conversationId,
//           sender: msg.sender,
//         });
//       }
//       // 🔥 CASE 2: CHAT CLOSED → UNREAD COUNT
//       else {
//         dispatch(incrementUnread(msg.sender));
//       }
//     };

//     socket.on("receiveMessage", handleReceive);
//     return () => socket.off("receiveMessage", handleReceive);
//   }, [selectedUser, currentUser, dispatch]);

//   // SEEN
//   useEffect(() => {
//     socket.on("messageSeen", ({ conversationId, sender }) => {
//       dispatch(markMessagesSeen({ conversationId, sender }));
//     });

//     return () => socket.off("messageSeen");
//   }, [dispatch]);

//   // SELECT USER
//   // const handleSelectUser = async (conv, user) => {
//   //   dispatch(setSelectedConversation(conv));
//   //   dispatch(setSelectedUser(user));

//   //   dispatch(getMessages(user._id));

//   //   await API.put("/messages/seen", {
//   //     conversationId: conv._id,
//   //   });

//   //   socket.emit("seen", {
//   //     conversationId: conv._id,
//   //     sender: user._id,
//   //   });

//   //   dispatch(markMessagesSeen({ conversationId: conv._id }));
//   // };

//   const handleSelectUser = async (conv, user) => {
//     dispatch(setSelectedConversation(conv));
//     dispatch(setSelectedUser(user));
//     dispatch(clearUnread(user._id));

//     dispatch(getMessages(user._id));

//     await API.put("/messages/seen", {
//       conversationId: conv._id,
//     });

//     socket.emit("seen", {
//       conversationId: conv._id,
//       sender: user._id,
//     });

//     // ✅ YAHI LAGANA HAI
//     dispatch(
//       markMessagesSeen({
//         conversationId: conv._id,
//         sender: user._id,
//       }),
//     );
//   };

//   // SEND
//   const handleSend = async () => {
//     if (!message.trim() || !selectedUser) return;

//     const res = await dispatch(
//       sendMessageAPI({
//         receiver: selectedUser._id,
//         message,
//       }),
//     );

//     if (res.payload) {
//       dispatch(addMessage(res.payload));

//       dispatch(updateConversationLastMessage(res.payload));
//       socket.emit("sendMessage", res.payload);
//     }

//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("typing", ({ sender }) => {
//       dispatch(setTypingUser(sender));
//     });

//     socket.on("stopTyping", () => {
//       dispatch(setTypingUser(null));
//     });

//     return () => {
//       socket.off("typing");
//       socket.off("stopTyping");
//     };
//   }, []);

//   const handleTyping = (e) => {
//     setMessage(e.target.value);

//     socket.emit("typing", {
//       sender: currentUser._id,
//       receiver: selectedUser._id,
//     });

//     setTimeout(() => {
//       socket.emit("stopTyping", {
//         sender: currentUser._id,
//         receiver: selectedUser._id,
//       });
//     }, 1000);
//   };

//   return (
//     <>
//       {/* 🔥 CENTERED LIKE PROFILE */}
//       <div className="max-w-6xl mx-auto">
//         <div className="flex h-[75vh] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1120] shadow-sm">
//           {/* SIDEBAR */}
//           <div className="w-[280px] flex-shrink-0 border-r border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0F172A]">
//             <div className="p-4 text-lg font-semibold">Messages</div>

//             {conversations.map((conv, i) => {
//               const user = conv.members?.find(
//                 (m) => m && m._id !== currentUser?._id,
//               );

//               if (!user) return null;

//               return (
//                 <div
//                   key={i}
//                   onClick={() => handleSelectUser(conv, user)}
//                   className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition"
//                 >
//                   <img
//                     src={user.avatar || "/default.png"}
//                     className="w-9 h-9 rounded-full"
//                   />

//                   <div className="flex-1 flex justify-between items-center">
//                     {/* LEFT SIDE (NAME + MESSAGE) */}
//                     <div>
//                       <p className="text-sm font-medium">{user.name}</p>
//                       <p className="text-xs text-gray-500 truncate">
//                         {conv.lastMessage}
//                       </p>
//                     </div>

//                     {/* 🔥 RIGHT SIDE (UNREAD BADGE) */}
//                     {(unreadCounts[user._id] || 0) > 0 && (
//                       <span className="bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
//                         {unreadCounts[user._id]}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-xs text-gray-400">
//                     {new Date(conv.updatedAt).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CHAT */}
//           <div className="flex-1 flex flex-col">
//             {/* HEADER */}
//             <div className="px-6 py-4 border-b border-gray-200 dark:border-white/10">
//               <div className="font-semibold">
//                 {selectedUser?.name || "Select user"}
//               </div>

//               {selectedUser && (
//                 <div className="text-xs text-gray-500">
//                   {onlineUsers.includes(selectedUser._id)
//                     ? "Online"
//                     : "Last seen recently"}
//                 </div>
//               )}
//             </div>

//             {/* MESSAGES */}
//             <div className="flex-1 overflow-y-auto py-4 bg-gray-50 dark:bg-[#020617]">
//               {/* 🔥 PROFILE STYLE CENTER */}
//               <div className="max-w-3xl mx-auto px-4 space-y-3">
//                 {messages.map((msg, i) => {
//                   const isMe = String(msg.sender) === String(currentUser._id);

//                   return (
//                     <div
//                       key={i}
//                       className={`flex ${
//                         isMe ? "justify-end" : "justify-start"
//                       }`}
//                     >
//                       <div
//                         className={`px-4 py-2 rounded-2xl text-sm break-words whitespace-pre-wrap 
//                         max-w-[80%] sm:max-w-[65%] ${
//                           isMe
//                             ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
//                             : "bg-gray-200 dark:bg-white/10"
//                         }`}
//                       >
//                         <div>{msg.message}</div>

//                         <div className="flex justify-end gap-1 mt-1 text-[10px] opacity-70">
//                           <span>
//                             {new Date(msg.createdAt).toLocaleTimeString([], {
//                               hour: "2-digit",
//                               minute: "2-digit",
//                             })}
//                           </span>

//                           {isMe && (
//                             <span
//                               className={`transition-all duration-300 ${
//                                 msg.seen
//                                   ? "text-blue-400 scale-110"
//                                   : "text-gray-400"
//                               }`}
//                             >
//                               {msg.seen ? "✓✓" : "✓"}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* INPUT */}
//             <div className="p-4 border-t border-gray-200 dark:border-white/10 flex gap-3">
//               <input
//                 value={message}
//                 onChange={handleTyping}
//                 placeholder="Write a message..."
//                 className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-transparent"
//               />

//               <button
//                 onClick={handleSend}
//                 className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
//               >
//                 Send
//               </button>
//             </div>

//             {typingUser === selectedUser?._id && (
//               <div className="text-xs text-gray-400 px-4">Typing...</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MessagesPanel;


import React, { useEffect, useState } from "react";
import socket from "../socket";
import { useDispatch, useSelector } from "react-redux";
import API from "../utils/axios";

import {
  getConversations,
  getMessages,
  sendMessageAPI,
  setSelectedUser,
  setSelectedConversation,
  addMessage,
  updateConversationLastMessage,
  markMessagesSeen,
  setUserOnline,
  setUserOffline,
  setTypingUser,
  incrementUnread,
  clearUnread,
} from "../redux/slices/chatSlice";

const MessagesPanel = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.profile);
  const currentUser = data?.user || data;

  const {
    conversations = [],
    messages = [],
    selectedUser,
    onlineUsers = [],
    typingUser,
    unreadCounts = {},
  } = useSelector((state) => state.chat);

  const [message, setMessage] = useState("");

  // LOAD
  useEffect(() => {
    dispatch(getConversations());
  }, [dispatch]);

  // SOCKET JOIN
  useEffect(() => {
    if (currentUser?._id) {
      socket.emit("join", currentUser._id);
    }
  }, [currentUser]);

  // ONLINE
  useEffect(() => {
    socket.on("userOnline", (id) => dispatch(setUserOnline(id)));
    socket.on("userOffline", (id) => dispatch(setUserOffline(id)));

    return () => {
      socket.off("userOnline");
      socket.off("userOffline");
    };
  }, [dispatch]);

  // RECEIVE
  // useEffect(() => {
  //   const handleReceive = (msg) => {
  //     if (String(msg.sender) === String(currentUser._id)) return;

  //     dispatch(updateConversationLastMessage(msg));

  //     if (
  //       selectedUser &&
  //       (msg.sender === selectedUser._id || msg.receiver === selectedUser._id)
  //     ) {
  //       dispatch(incrementUnread(msg.sender));
  //       dispatch(addMessage(msg));

  //       // 🔥🔥 YAHI MISSING THA
  //       socket.emit("seen", {
  //         conversationId: msg.conversationId,
  //         sender: msg.sender,
  //       });
  //     }
  //   };

  //   socket.on("receiveMessage", handleReceive);
  //   return () => socket.off("receiveMessage", handleReceive);
  // }, [selectedUser, currentUser, dispatch]);

  useEffect(() => {
    const handleReceive = (msg) => {
      if (String(msg.sender) === String(currentUser._id)) return;

      dispatch(updateConversationLastMessage(msg));

      // 🔥 CASE 1: CHAT OPEN HAI → NO UNREAD
      if (selectedUser && msg.sender === selectedUser._id) {
        dispatch(addMessage(msg));

        socket.emit("seen", {
          conversationId: msg.conversationId,
          sender: msg.sender,
        });
      }
      // 🔥 CASE 2: CHAT CLOSED → UNREAD COUNT
      else {
        dispatch(incrementUnread(msg.sender));
      }
    };

    socket.on("receiveMessage", handleReceive);
    return () => socket.off("receiveMessage", handleReceive);
  }, [selectedUser, currentUser, dispatch]);

  // SEEN
  useEffect(() => {
    socket.on("messageSeen", ({ conversationId, sender }) => {
      dispatch(markMessagesSeen({ conversationId, sender }));
    });

    return () => socket.off("messageSeen");
  }, [dispatch]);

  // SELECT USER
  // const handleSelectUser = async (conv, user) => {
  //   dispatch(setSelectedConversation(conv));
  //   dispatch(setSelectedUser(user));

  //   dispatch(getMessages(user._id));

  //   await API.put("/messages/seen", {
  //     conversationId: conv._id,
  //   });

  //   socket.emit("seen", {
  //     conversationId: conv._id,
  //     sender: user._id,
  //   });

  //   dispatch(markMessagesSeen({ conversationId: conv._id }));
  // };

  const handleSelectUser = async (conv, user) => {
    dispatch(setSelectedConversation(conv));
    dispatch(setSelectedUser(user));
    dispatch(clearUnread(user._id));

    dispatch(getMessages(user._id));

    await API.put("/messages/seen", {
      conversationId: conv._id,
    });

    socket.emit("seen", {
      conversationId: conv._id,
      sender: user._id,
    });

    // ✅ YAHI LAGANA HAI
    dispatch(
      markMessagesSeen({
        conversationId: conv._id,
        sender: user._id,
      }),
    );
  };

  // SEND
  const handleSend = async () => {
    if (!message.trim() || !selectedUser) return;

    const res = await dispatch(
      sendMessageAPI({
        receiver: selectedUser._id,
        message,
      }),
    );

    if (res.payload) {
      dispatch(addMessage(res.payload));

      dispatch(updateConversationLastMessage(res.payload));
      socket.emit("sendMessage", res.payload);
    }

    setMessage("");
  };

  useEffect(() => {
    socket.on("typing", ({ sender }) => {
      dispatch(setTypingUser(sender));
    });

    socket.on("stopTyping", () => {
      dispatch(setTypingUser(null));
    });

    return () => {
      socket.off("typing");
      socket.off("stopTyping");
    };
  }, []);

  const handleTyping = (e) => {
    setMessage(e.target.value);

    socket.emit("typing", {
      sender: currentUser._id,
      receiver: selectedUser._id,
    });

    setTimeout(() => {
      socket.emit("stopTyping", {
        sender: currentUser._id,
        receiver: selectedUser._id,
      });
    }, 1000);
  };

  return (
    <>
      {/* 🔥 CENTERED LIKE PROFILE */}
      <div className="w-full">
        <div className="flex h-[80vh] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative">
          {/* Subtle top glare */}
          <div className="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

          {/* SIDEBAR */}
          <div className="w-[280px] flex-shrink-0 border-r border-gray-200 dark:border-[#262626] bg-gray-50/50 dark:bg-[#0a0a0a]/50">
            <div className="p-5 text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide border-b border-gray-200 dark:border-[#262626]">Messages</div>

            {conversations.map((conv, i) => {
              const user = conv.members?.find(
                (m) => m && m._id !== currentUser?._id,
              );

              if (!user) return null;

              return (
                <div
                  key={i}
                  onClick={() => handleSelectUser(conv, user)}
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 transition"
                >
                  <img
                    src={user.avatar || "/default.png"}
                    className="w-9 h-9 rounded-full"
                  />

                  <div className="flex-1 flex justify-between items-center">
                    {/* LEFT SIDE (NAME + MESSAGE) */}
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {conv.lastMessage}
                      </p>
                    </div>

                    {/* 🔥 RIGHT SIDE (UNREAD BADGE) */}
                    {(unreadCounts[user._id] || 0) > 0 && (
                      <span className="bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
                        {unreadCounts[user._id]}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">
                    {new Date(conv.updatedAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CHAT */}
          <div className="flex-1 flex flex-col">
            {/* HEADER */}
            <div className="px-6 py-5 border-b border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] relative z-10 shadow-sm dark:shadow-none">
              <div className="font-bold text-gray-900 dark:text-white">
                {selectedUser?.name || "Select user"}
              </div>

              {selectedUser && (
                <div className="text-xs font-medium text-gray-500 mt-1">
                  {onlineUsers.includes(selectedUser._id)
                    ? <span className="text-green-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online</span>
                    : "Last seen recently"}
                </div>
              )}
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto py-6 bg-gray-50 dark:bg-[#121212] shadow-inner relative">
              {/* 🔥 PROFILE STYLE CENTER */}
              <div className="max-w-3xl mx-auto px-4 space-y-3">
                {messages.map((msg, i) => {
                  const isMe = String(msg.sender) === String(currentUser._id);

                  return (
                    <div
                      key={i}
                      className={`flex ${
                        isMe ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`px-5 py-3 rounded-2xl text-sm break-words whitespace-pre-wrap shadow-sm 
                        max-w-[80%] sm:max-w-[65%] font-medium ${
                          isMe
                            ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-indigo-500/20 rounded-tr-none"
                            : "bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-[#333333] rounded-tl-none shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <div>{msg.message}</div>

                        <div className="flex justify-end gap-1 mt-1 text-[10px] opacity-70">
                          <span>
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>

                          {isMe && (
                            <span
                              className={`transition-all duration-300 ${
                                msg.seen
                                  ? "text-blue-400 scale-110"
                                  : "text-gray-400"
                              }`}
                            >
                              {msg.seen ? "✓✓" : "✓"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* INPUT */}
            <div className="p-5 border-t border-gray-200 dark:border-[#262626] bg-white dark:bg-[#0a0a0a] flex gap-4 relative z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] dark:shadow-none">
              <input
                value={message}
                onChange={handleTyping}
                placeholder="Write a message..."
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600"
              />

              <button
                onClick={handleSend}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] active:scale-95 transition-all flex items-center justify-center"
              >
                Send
              </button>
            </div>

            {typingUser === selectedUser?._id && (
              <div className="text-xs text-gray-400 px-4">Typing...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPanel;
