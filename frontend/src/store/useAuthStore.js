import {create} from "zustand"
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSingningUp: false,
    isLoggingIng: false,
    isUpdatingProfile: false,
    onlineUsers:[],
    isCheckingAuth: true, // to authenticate the user
    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");
            
            set({authUser: res.data});
        } catch (error) {
            console.log("Error in checkAuth: ",error);
            set({authUser:null});
        } finally {
            set({isCheckingAuth:false})
        }
    },

    signup: async( data ) => {
        set({ isSingningUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data.user});
            toast.success("Accound created successfully");
            
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSingningUp:false})
        }

    },

    login: async(data)=> {
        set({ isLoggingIng: true});

        try {
            const res = await axiosInstance.post("/auth/login",data);
            set({authUser: res.data.user});
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isLoggingIng: false});
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser: null})
            toast.success("Logout successfull")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
        set({isUpdatingProfile: true});

        try {
            const res = await axiosInstance.post("/auth/update-profile",data);
            set(({authUser:res.data}));
            toast.success("Profile picture updated successfully");
        } catch (error) {
            console.log("error in updating profile ",error);
            toast.error(error.response.data.message);
        } finally {
            set({isUpdatingProfile: false})
        }
    }


}));