import axios from "axios";

import { useNavigate } from "react-router-dom";

// const API_BASE_URL = "https://9w2jqf90-7070.asse.devtunnels.ms";
const API_BASE_URL = "https://qairlline-backend.onrender.com";

// Set up axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-auth-token": "QAirline-API-Token",
  },
});

const clientNoInterceptor = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-auth-token": "QAirline-API-Token",
  },
});

apiClient.interceptors.response.use(
  async (response) => {
    if (response.data.code === 401) {
      console.log("Handling invalid token");
      window.location.href = "/login";
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      originalRequest._retry
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    }
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Avoid infinite loop
      try {
        const { data } = await axios.post(
          "/api/customer/v1/refresh_jwt",
          localStorage.getItem("refreshToken"),
          {
            baseURL: API_BASE_URL,
            headers: {
              "Content-Type": "text/plain",
              "X-auth-token": "QAirline-API-Token",
            },
          }
        );

        localStorage.setItem("accessToken", data.message);
        originalRequest.headers["Authorization"] = data.message;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token expired. Please log in again.");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Add an interceptor to inject the token into requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const getAllNews = async () => {
  try {
    const response = await apiClient.get("/api/customer/v1/news/filter_news");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsById = async (newsId) => {
  try {
    const response = await apiClient.get("/api/customer/v1/news", {
      params: {
        newsId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsByFolder = async (folder) => {
  try {
    const response = await apiClient.get("/api/customer/v1/news/filter_news", {
      params: {
        folder,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getNewsById = async () =>
export const fetchMockNews = async () => {
  try {
    const response = await axios.get("/newsData.json");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginApi = async (username, password) => {
  try {
    const response = await clientNoInterceptor.post(
      "/api/customer/v1/authenticate",
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  const response = await apiClient.post("/api/customer/v1/refresh_jwt", {
    refreshToken: localStorage.getItem("refreshToken"),
  });
  return response.data; // { accessToken }
};

// CHO NAY TUAN VIET :P
export const fetchUserData = async () => {
  try {
    const response = await apiClient.get("/api/customer/v1/current_user");
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching current user");
    throw error;
  }
};

export const signUpApi = async (username, password, email) => {
  try {
    const response = await clientNoInterceptor.post(
      "/api/customer/v1/register",
      {
        username,
        password,
        email,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const forgotPasswordApi = async (email) => {
  try {
    const response = await clientNoInterceptor.post(
      "/api/customer/v1/forgot_password",
      email,
      {
        headers: {
          "Content-Type": "text/plain", // Xác định định dạng dữ liệu
        },
      }
    );
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error paying ticket:", error);
    throw error;
  }
};

export const resetPasswordApi = async (data) => {
  try {
    const response = await clientNoInterceptor.post(
      "/api/customer/v1/create_new_password",
      data
    );
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error reset password:", error);
    throw error;
  }
}

export const changePasswordApi = async (data) => {
  try {
    const response = await apiClient.put("/api/customer/v1/change_password", data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
}

export const putUserProfile = async (data) => {
  try {
    const response = await apiClient.put("/api/customer/v1/edit", data);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error posting user profile:", error);
    throw error;
  }
};

export const fetchFilteredFlights = async (data) => {
  try {
    // const data = {
    //   departureCity: from,
    //   arrivalCity: to,
    //   departureTimeStart: start,
    //   departureTimeEnd: end,
    // };
    const response = await apiClient.get("/api/customer/v1/flights/filter", {
      params: data,
    });
    console.log("Filtered flights data:", response);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching filtered flights data:", error);
    throw error;
  }
};

export const fetchAllCities = async () => {
  try {
    const response = await apiClient.get("/api/customer/v1/airports/cities");
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching cities data:", error);
    throw error;
  }
};

export const postTicket = async (data) => {
  try {
    const response = await apiClient.post("/api/customer/v1/booking", data);
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error posting ticket:", error);
    throw error;
  }
};

export const postPayTicket = async (data) => {
  try {
    const response = await apiClient.post("/api/customer/v1/booking/pay", data, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error paying ticket:", error);
    throw error;
  }
};

export const fetchAllTickets = async () => {
  try {
    const response = await apiClient.get("/api/customer/v1/booking");
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching tickets data:", error);
    throw error;
  }
}

export const putTicket = async (data) => {
  try {
    const response = await apiClient.put("/api/customer/v1/booking", data);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error updating ticket:", error);
    throw error;
  }
}

export const deleteTicket = async (id) => {
  try {
    const response = await apiClient.delete("/api/customer/v1/booking", {
      params: {
        id,
      },
    });
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("Error deleting ticket:", error);
    throw error;
  }
}