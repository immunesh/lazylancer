import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios";

// 🔥 GET CONVERSATIONS
export const getConversations = createAsyncThunk(
  "chat/getConversations",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/messages/conversations");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// 🔥 GET MESSAGES
export const getMessages = createAsyncThunk(
  "chat/getMessages",
  async (receiverId, thunkAPI) => {
    try {
      const res = await API.get(`/messages/${receiverId}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

// 🔥 SEND MESSAGE
export const sendMessageAPI = createAsyncThunk(
  "chat/sendMessage",
  async (data, thunkAPI) => {
    try {
      const res = await API.post("/messages", data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  },
);

const chatSlice = createSlice({
  name: "chat",

  initialState: {
    conversations: [],
    messages: [],
    selectedUser: null,
    selectedConversation: null,
    onlineUsers: [],
    typingUser: null,
    unreadCounts: {}, // { conversationId: count }
  },

  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },

    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
      state.messages = [];
    },
    setTypingUser: (state, action) => {
      state.typingUser = action.payload;
    },

    // 🔥 SAFE ADD MESSAGE (NO DUPLICATE)
    addMessage: (state, action) => {
      const newMsg = action.payload;

      const exists = state.messages.some((m) => m._id === newMsg._id);

      if (!exists) {
        state.messages.push(newMsg);
      }
    },

    // updateConversationLastMessage: (state, action) => {
    //   const newMsg = action.payload;

    //   const convo = state.conversations.find(
    //     (c) => String(c._id) === String(newMsg.conversationId),
    //   );

    //   if (convo) {
    //     convo.lastMessage = newMsg.message;

    //     state.conversations = [
    //       convo,
    //       ...state.conversations.filter((c) => c._id !== convo._id),
    //     ];
    //   }
    // },

    // 🔥 SEEN FIX (IMPORTANT)
    // markMessagesSeen: (state, action) => {
    //   const { conversationId } = action.payload;

    //   state.messages = state.messages.map((msg) => {
    //     if (String(msg.conversationId) === String(conversationId)) {
    //       return { ...msg, seen: true };
    //     }
    //     return msg;
    //   });
    // },

updateConversationLastMessage: (state, action) => {
  const msg = action.payload;

  const index = state.conversations.findIndex(
    (conv) => String(conv._id) === String(msg.conversationId)
  );

  if (index !== -1) {
    state.conversations[index].lastMessage = msg.message;
    state.conversations[index].updatedAt = msg.createdAt;

    // 🔥 move that chat to top (IMPORTANT LIKE WHATSAPP)
    const updatedConv = state.conversations.splice(index, 1)[0];
    state.conversations.unshift(updatedConv);
  }
},

    markMessagesSeen: (state, action) => {
      const { conversationId, sender } = action.payload;

      state.messages = state.messages.map((msg) => {
        if (
          String(msg.conversationId) === String(conversationId) &&
          String(msg.sender) === String(sender)
        ) {
          return { ...msg, seen: true };
        }
        return msg;
      });
    },

    // 🟢 ONLINE USERS
    setUserOnline: (state, action) => {
      if (!state.onlineUsers.includes(action.payload)) {
        state.onlineUsers.push(action.payload);
      }
    },

    setUserOffline: (state, action) => {
      state.onlineUsers = state.onlineUsers.filter(
        (id) => id !== action.payload,
      );
    },

    incrementUnread: (state, action) => {
      const sender = action.payload;

      state.unreadCounts[sender] = (state.unreadCounts[sender] || 0) + 1;
    },

    clearUnread: (state, action) => {
      const sender = action.payload;
      state.unreadCounts[sender] = 0;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getConversations.fulfilled, (state, action) => {
        state.conversations = action.payload;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export const {
  setSelectedUser,
  setSelectedConversation,
  setTypingUser,
  addMessage,
  updateConversationLastMessage,
  markMessagesSeen,
  setUserOnline,
  setUserOffline,
  incrementUnread,
  clearUnread,
} = chatSlice.actions;

export default chatSlice.reducer;
